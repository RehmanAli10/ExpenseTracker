import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
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

  const incomeData = getTransactionDataByType(transactions, 'income');
  const expenseData = getTransactionDataByType(transactions, 'expense');
  const circularData = formatCircularPiechartData(transactions);

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color={'white'} height={24} width={24} />
          </TouchableOpacity>
        }
        headingText={'Reports'}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {Object.entries(incomeData).length === 0 &&
          Object.entries(expenseData).length === 0 && (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                No transactions recorded yet.
              </Text>
            </View>
          )}

        {Object.entries(incomeData).length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Income Reports</Text>
            <Charts
              transactions={incomeData}
              color={'green'}
              rgba="0, 200, 0"
              currency={settings?.[0]?.settingCurrency}
            />
          </View>
        )}

        {Object.entries(expenseData).length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Expense Reports</Text>
            <Charts
              transactions={expenseData}
              color={'darkred'}
              rgba="200, 0, 0"
              currency={settings?.[0]?.settingCurrency}
            />
          </View>
        )}

        {circularData.length > 0 && (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Income and Expense Overview</Text>
            <CircularProgress transactions={circularData} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  messageText: {
    fontSize: 18,
    color: 'black',
  },
  sectionContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'black',
  },
});
