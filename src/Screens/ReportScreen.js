import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';

import {useTransactions} from './TransactionScreen/useTransactions';
import Charts from '../Components/Charts';

function ReportScreen({handleNavigateBack}) {
  const {transactions} = useTransactions();

  const getIncomeData = transactions => {
    const incomeData = {};

    for (const month in transactions) {
      const monthTransactions = transactions[month];
      const totalIncome = monthTransactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

      incomeData[month] = totalIncome;
    }

    return incomeData;
  };

  const incomeData = getIncomeData(transactions);

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
          <Text>Reports by income</Text>
        </View>
        <Charts transactions={incomeData} />
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
  graphContainer: {},
});
