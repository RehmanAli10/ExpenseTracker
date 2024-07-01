import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomSpinner from './CustomSpinner';
import {useTransactions} from '../Screens/TransactionScreen/useTransactions';
import {useSettings} from '../Screens/useSettings';

function CustomContent() {
  const {isLoading, totalIncome, totalExpense, totalBalance} =
    useTransactions();

  const {settings} = useSettings();

  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.incomeText}>Income</Text>
        {isLoading ? (
          <CustomSpinner size="small" color="#0000ff" />
        ) : (
          <Text style={styles.incomeContent}>
            {totalIncome.toFixed(2)} {settings?.[0]?.settingCurrency}
          </Text>
        )}
      </View>
      <View>
        <Text style={styles.expenseText}>Expense</Text>
        {isLoading ? (
          <CustomSpinner size="small" color="#0000ff" />
        ) : (
          <Text style={styles.expenseContent}>
            {totalExpense.toFixed(2)} {settings?.[0]?.settingCurrency}
          </Text>
        )}
      </View>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        {isLoading ? (
          <CustomSpinner size="small" color="#0000ff" />
        ) : (
          <Text style={styles.balanceContent}>
            {totalBalance.toFixed(2)} {settings?.[0]?.settingCurrency}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 25,
    width: '90%',
    backgroundColor: '#ACA9BB',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 30,
  },
  incomeContent: {
    width: 70,
    color: '#043927',
    fontWeight: 'bold',
  },
  expenseContent: {
    width: 70,
    color: '#58111A',
    fontWeight: 'bold',
  },
  balanceContent: {
    width: 70,
    color: '#0090C4',
    fontWeight: 'bold',
  },
  incomeText: {
    fontWeight: 'bold',
    color: 'black',
  },
  expenseText: {
    fontWeight: 'bold',
    color: 'black',
  },
  balanceText: {
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    color: 'blue',
  },
});

export default CustomContent;
