import React from 'react';
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

function TransactionScreen({navigation, handleNavigateBack}) {
  const {transactions, isLoading, totalIncome, totalExpense, totalBalance} =
    useTransactions();

  function handleEdit(editedData) {
    if (editedData.type === 'income') {
      navigation.navigate('IncomeFormScreen', {
        index: editedData,
      });
    } else {
      navigation.navigate('ExpenseFormScreen', {
        index: editedData,
      });
    }
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
      />
    );
  };

  const renderGroup = ({item}) => (
    <View style={styles.groupContainer}>
      <Text style={styles.monthYear}>{item.monthYear}</Text>
      <FlatList
        data={item.data}
        renderItem={renderItem}
        keyExtractor={transaction => transaction.id}
      />
    </View>
  );

  if (isLoading)
    return <ActivityIndicator style={styles.container} size={'large'} />;

  const groupedTransactions = Object.keys(transactions).map(key => ({
    monthYear: key,
    data: transactions[key],
  }));

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color={'white'} height={'8%'} width={'8%'} />
          </TouchableOpacity>
        }
      />

      <FlatList
        data={groupedTransactions}
        renderItem={renderGroup}
        keyExtractor={item => item.monthYear}
      />

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
});

export default TransactionScreen;
