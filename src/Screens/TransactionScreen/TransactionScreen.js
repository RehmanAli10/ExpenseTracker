import React, {useState, useMemo, useCallback} from 'react';
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
import SearchField from '../../Components/SearchField';

function TransactionScreen({navigation, handleNavigateBack}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailDescription, setDetailDescription] = useState('');
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const {transactions, isLoading, totalIncome, totalExpense, totalBalance} =
    useTransactions();
  const {deleteTransaction} = useDeleteTransaction();

  const handleEdit = useCallback(
    id => {
      const newData = Object.values(transactions)
        .flat(1)
        .find(currEle => currEle.id === id);

      const editedData = {
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
    },
    [transactions, navigation],
  );

  const handleDelete = useCallback(
    id => {
      deleteTransaction(id);
    },
    [deleteTransaction],
  );

  const handleModal = useCallback((desc, id) => {
    setSelectedTransaction(id);
    setDetailDescription(desc);
    setModalVisible(true);
  }, []);

  const handleFilterChange = useCallback(newFilter => {
    setFilter(newFilter);
  }, []);

  const handleSearchQuery = useCallback(query => {
    setSearchQuery(query);
  }, []);

  const getFilteredTransactions = useCallback(() => {
    let allTransactions = Object.values(transactions).flat(1);

    if (searchQuery) {
      allTransactions = allTransactions.filter(
        transaction =>
          transaction.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          transaction.amount.toString().includes(searchQuery),
      );
    }

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
  }, [transactions, searchQuery, filter]);

  const filteredTransactions = useMemo(
    () => getFilteredTransactions(),
    [getFilteredTransactions],
  );

  const groupedTransactions = useMemo(
    () => groupTransactionsByMonthYear(filteredTransactions),
    [filteredTransactions],
  );

  const groupedTransactionsArray = useMemo(
    () =>
      Object.keys(groupedTransactions).map(key => ({
        monthYear: key,
        data: groupedTransactions[key],
      })),
    [groupedTransactions],
  );

  const renderItem = useCallback(
    ({item}) => {
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
    },
    [
      handleEdit,
      handleDelete,
      handleModal,
      modalVisible,
      deleteModalVisible,
      detailDescription,
      selectedTransaction,
    ],
  );

  const renderGroup = useCallback(
    ({item}) => (
      <View style={styles.groupContainer}>
        <Text style={styles.monthYear}>{item.monthYear}</Text>
        <FlatList
          data={item.data}
          renderItem={renderItem}
          keyExtractor={transaction => transaction.id}
        />
      </View>
    ),
    [renderItem],
  );

  if (isLoading)
    return <ActivityIndicator style={styles.container} size={'large'} />;

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color={'white'} height={'8%'} width={'8%'} />
          </TouchableOpacity>
        }
        headingText={'Transactions'}
      />

      <SearchField
        searchField={searchQuery}
        setSearchField={setSearchQuery}
        handleSearchQuery={handleSearchQuery}
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
    backgroundColor: '#F0F0F0',
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
