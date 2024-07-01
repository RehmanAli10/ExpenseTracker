import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';

import {useTransactions} from './TransactionScreen/useTransactions';
import Charts from '../Components/Charts';
import CircularProgress from '../Components/CircularProgress';
import {
  getTransactionDataByType,
  formatCircularPiechartData,
} from '../Utils/helpers';
import {useSettings} from './useSettings';

function ReportScreen({handleNavigateBack}) {
  const {transactions} = useTransactions();

  const {settings} = useSettings();

  console.log('Report screen', settings);

  const incomeData = getTransactionDataByType(transactions, 'income');
  const expenseData = getTransactionDataByType(transactions, 'expense');
  const circularData = formatCircularPiechartData(transactions);

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color={'white'} height={'8%'} width={'8%'} />
          </TouchableOpacity>
        }
        headingText={'Reports'}
      />

      {Object.entries(incomeData).length === 0 &&
        Object.entries(expenseData).length === 0 && (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Kindly, Add Transactions 😊</Text>
          </View>
        )}

      <View style={styles.graphContainer}>
        {Object.entries(incomeData).length > 0 && (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Reports by income</Text>
            </View>
            <Charts
              transactions={incomeData}
              color={'green'}
              rgba="0, 200, 0"
              currency={settings?.[0]?.settingCurrency}
            />
          </>
        )}
      </View>

      <View style={styles.graphContainer}>
        {Object.entries(expenseData).length > 0 && (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Reports by expense</Text>
            </View>
            <Charts
              transactions={expenseData}
              color={'darkred'}
              rgba="200, 0, 0"
              currency={settings?.[0]?.settingCurrency}
            />
          </>
        )}
      </View>

      <View style={styles.graphContainer}>
        {circularData.length > 0 && (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Report income and expense</Text>
            </View>
            <CircularProgress transactions={circularData} />
          </>
        )}
      </View>
    </ScrollView>
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
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    color: 'black',
    fontSize: 18,
  },
  graphContainer: {
    marginTop: 12,
    marginLeft: 12,
  },
});
