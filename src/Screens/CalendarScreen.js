import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useTransactions} from './TransactionScreen/useTransactions';
import {useDeleteTransaction} from './FormScreens/useDeleteTransaction';
import Transaction from '../Components/Transaction';
import {useNavigation} from '@react-navigation/native';

function CalendarScreen() {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [detailDescription, setDetailDescription] = useState('');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  const {transactions, refetch} = useTransactions();
  const {deleteTransaction} = useDeleteTransaction();

  let updatedTransactions = Object.values(transactions).flat();

  useEffect(
    function () {
      const currentDate = new Date().toISOString().split('T')[0];

      const currentTransaction = updatedTransactions.filter(currTrans => {
        const date = currTrans.time.split('T')[0];
        return date === currentDate;
      });

      setSelectedTransactions(currentTransaction);
    },
    [selected],
  );

  function handleEdit(id) {
    let newData = Object.values(transactions)
      .flat(1)
      .find(currEle => currEle.id === id);

    let editedData = {
      id: newData.id,
      amount: newData.amount,
      description: newData.description,
      time: newData.time,
    };

    if (newData.type === 'income') {
      navigation.navigate('IncomeFormScreen', {
        index: editedData,
      });
    } else {
      navigation.navigate('ExpenseFormScreen', {
        index: editedData,
      });
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
      selectedColor: 'blue',
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
    <View>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        style={{
          height: 350,
        }}
      />
      <View style={styles.transactionList}>
        {filteredTransactions.length > 0 ? (
          <FlatList
            data={filteredTransactions}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  transactionList: {
    marginTop: 20,
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    color: 'white',
  },
});
