import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';

import {useTransactions} from './TransactionScreen/useTransactions';
import Charts from '../Components/Charts';

function ReportScreen({handleNavigateBack}) {
  const {transactions} = useTransactions();

  const getTransactionDataByType = (transactions, type) => {
    const data = {};

    for (const month in transactions) {
      const foramttedMonth = month.length > 3 ? month.slice(0, 3) : month;
      const monthTransactions = transactions[month];
      const totalAmount = monthTransactions
        .filter(transaction => transaction.type === type)
        .reduce((sum, transaction) => sum + transaction.amount, 0);

      if (totalAmount > 0) {
        data[foramttedMonth] = totalAmount;
      }
    }

    return data;
  };

  const incomeData = getTransactionDataByType(transactions, 'income');
  const expenseData = getTransactionDataByType(transactions, 'expense');

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color={'white'} height={'8%'} width={'8%'} />
          </TouchableOpacity>
        }
        headingText={'Reports'}
      />
      <View style={styles.graphContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Reports by income</Text>
        </View>
        <Charts transactions={incomeData} color={'green'} rgba="0, 200, 0" />
      </View>

      <View style={styles.graphContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Reports by expense</Text>
        </View>
        <Charts transactions={expenseData} color={'darkred'} rgba="200, 0, 0" />
      </View>
    </View>
  );
}

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  textContainer: {
    marginBottom: 10,
    marginLeft: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  graphContainer: {
    marginTop: 12,
    marginLeft: 12,
  },
});
