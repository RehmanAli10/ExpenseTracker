import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useTransactions} from './TransactionScreen/useTransactions';
import {useDeleteTransaction} from './FormScreens/useDeleteTransaction';
import Transaction from '../Components/Transaction';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';

function CalendarScreen({navigation, handleNavigateBack}) {
  const [selected, setSelected] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [detailDescription, setDetailDescription] = useState('');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  const {transactions, refetch} = useTransactions();
  const {deleteTransaction} = useDeleteTransaction();

  let updatedTransactions = Object.values(transactions).flat();

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTransaction = updatedTransactions.filter(currTrans => {
      const date = currTrans.time.split('T')[0];
      return date === currentDate;
    });
    setSelectedTransactions(currentTransaction);
  }, [selected]);

  function handleEdit(id) {
    let newData = Object.values(transactions)
      .flat()
      .find(currEle => currEle.id === id);
    let editedData = {
      id: newData.id,
      amount: newData.amount,
      description: newData.description,
      time: newData.time,
    };
    if (newData.type === 'income') {
      navigation.navigate('IncomeFormScreen', {index: editedData});
    } else {
      navigation.navigate('ExpenseFormScreen', {index: editedData});
    }
  }

  function handleDelete(id) {
    deleteTransaction(id);
    const deleteTransactions = selectedTransactions.filter(
      currTra => currTra.id !== id,
    );
    setSelectedTransactions(deleteTransactions);
    refetch();
  }

  function handleModal(desc, id) {
    setSelectedTransaction(id);
    setDetailDescription(desc);
    setModalVisible(true);
  }

  const handleDayPress = day => {
    setSelected(day.dateString);
  };

  const markedDates = {};
  updatedTransactions.forEach(transaction => {
    const date = transaction.time.split('T')[0];
    markedDates[date] = {
      selected: true,
      marked: true,
      selectedColor: 'black',
    };
  });

  const filteredTransactions = updatedTransactions.filter(transaction => {
    const date = transaction.time.split('T')[0];
    return date === selected;
  });

  const renderItem = ({item}) => {
    return (
      <Transaction
        id={item.id}
        amount={item.amount}
        type={item.type}
        description={item.description}
        time={item.time}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleModal={handleModal}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        detailDescription={detailDescription}
        deleteModalVisible={deleteModalVisible}
        setDeleteModalVisible={setDeleteModalVisible}
        selectedTransaction={selectedTransaction}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon />
          </TouchableOpacity>
        }
        headingText={'Calendar'}
      />
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: '#000',
          todayTextColor: '#00adf5',
          arrowColor: '#000',
        }}
      />
      <View style={styles.transactionList}>
        {filteredTransactions.length === 0 ? (
          <Text style={styles.notSelectedDateText}>
            Kindly add transactions{' '}
            {Object.keys(selected).length > 0 ? selected : '😊'}
          </Text>
        ) : (
          <FlatList
            data={filteredTransactions}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  calendar: {
    borderRadius: 10,
    elevation: 3,
    margin: 10,
  },
  transactionList: {
    flex: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 3,
  },
  notSelectedDateText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
