import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomSpinner from './CustomSpinner';
import {useTransactions} from '../CustomHooks/useTransactions';

function CustomContent() {
  const {transactions, isLoading} = useTransactions();

  let totalIncome = transactions
    ?.filter(currElem => currElem.type === 'income')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  let totalExpense = transactions
    ?.filter(currElem => currElem.type === 'expense')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  let totalBalance = totalIncome - totalExpense;

  return (
    <View style={styles.contentContainer}>
      <View>
        <Text style={styles.incomeText}>Income</Text>
        {/* added the state prop to show the updated income data */}

        {isLoading ? (
          <CustomSpinner size={'small'} color={'#0000ff'} />
        ) : (
          <Text style={styles.incomeContent}>{totalIncome} Rs</Text>
        )}
      </View>
      <View>
        <Text style={styles.expenseText}>Expense</Text>

        {isLoading ? (
          <CustomSpinner size={'small'} color={'#0000ff'} />
        ) : (
          <Text style={styles.expenseContent}>{totalExpense} Rs</Text>
        )}
      </View>
      <View>
        <Text style={styles.balanceText}>Balance</Text>
        {/* calculated balance on the top of the screen and shown on the balance content */}
        {isLoading ? (
          <CustomSpinner size={'small'} color={'#0000ff'} />
        ) : (
          <Text style={styles.balanceContent}>{totalBalance} Rs</Text>
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
    // justifyContent: 'center',
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
});

export default CustomContent;
