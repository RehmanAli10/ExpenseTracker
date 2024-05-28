import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';

import CustomBottomSheet from '../../Components/CustomBottomSheet';
import HeaderComponent from '../../Components/HeaderComponent';
import Transaction from '../../Components/Transaction';

import {BackIcon} from '../../Assets/Icons';
import {useTransactions} from './useTransactions';
import {useDeleteTransaction} from '../FormScreens/useDeleteTransaction';
import FilterOptions from '../../Components/FilterOptions';
import {groupTransactionsByMonthYear} from '../../Utils/helpers';

function TransactionScreen({navigation, handleNavigateBack}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailDescription, setDetailDescription] = useState('');

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const [filter, setFilter] = useState('all');

  const {transactions, isLoading, totalIncome, totalExpense, totalBalance} =
    useTransactions();

  const {deleteTransaction} = useDeleteTransaction();

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
  }

  function handleModal(desc, id) {
    setSelectedTransaction(id);
    setDetailDescription(desc);
    setModalVisible(true);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const renderItem = ({item}) => {
    const {id, amount, type, description, time} = item;

    return (
      <Transaction
        id={id}
        amount={amount}
        type={type}
        description={description}
        time={time}
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

  const renderGroup = ({item}) => (
    <View style={styles.groupContainer}>
      <Text style={styles.monthYear}>{item.monthYear}</Text>
      <FlatList
        data={item.data}
        renderItem={renderItem}
        keyExtractor={transactions => transactions.id}
      />
    </View>
  );

  if (isLoading)
    return <ActivityIndicator style={styles.container} size={'large'} />;

  const getFilteredTransactions = () => {
    let allTransactions = Object.values(transactions).flat(1);

    switch (filter) {
      case 'income':
        return allTransactions.filter(
          transaction => transaction.type === 'income',
        );
      case 'expense':
        return allTransactions.filter(
          transaction => transaction.type === 'expense',
        );
      case 'highestIncome':
        return allTransactions
          .filter(transaction => transaction.type === 'income')
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 1);
      case 'lowestIncome':
        return allTransactions
          .filter(transaction => transaction.type === 'income')
          .sort((a, b) => a.amount - b.amount)
          .slice(0, 1);
      case 'highestExpense':
        return allTransactions
          .filter(transaction => transaction.type === 'expense')
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 1);
      case 'lowestExpense':
        return allTransactions
          .filter(transaction => transaction.type === 'expense')
          .sort((a, b) => a.amount - b.amount)
          .slice(0, 1);
      default:
        return allTransactions;
    }
  };

  const filteredTransactions = getFilteredTransactions();

  const groupedTransactions =
    groupTransactionsByMonthYear(filteredTransactions);

  const groupedTransactionsArray = Object.keys(groupedTransactions).map(
    key => ({
      monthYear: key,
      data: groupedTransactions[key],
    }),
  );

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color={'white'} height={'8%'} width={'8%'} />
          </TouchableOpacity>
        }
      />
      <FilterOptions
        handleFilterChange={handleFilterChange}
        activeFilter={filter}
      />
      {groupedTransactionsArray.length > 0 ? (
        <FlatList
          data={groupedTransactionsArray}
          renderItem={renderGroup}
          keyExtractor={item => item.monthYear}
        />
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Kindly, Add Transactions 😊</Text>
        </View>
      )}

      <Button
        title={`Balance: ${totalBalance} RS`}
        onPress={() => this.RBSheet.open()}
        color="black"
      />
      <CustomBottomSheet
        title={'Income: '}
        amountOne={totalIncome}
        titleTwo={'Expense: '}
        amountTwo={totalExpense}
        onClose={() => this.RBSheet.close()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  groupContainer: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  monthYear: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
    fontWeight: 'bold',
  },
  messageText: {
    color: 'black',
    fontSize: 18,
  },
});

export default TransactionScreen;
