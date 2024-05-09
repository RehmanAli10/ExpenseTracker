import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomBottomSheet from '../../Components/CustomBottomSheet';
import HeaderComponent from '../../Components/HeaderComponent';
import EachTransaction from './EachTransaction';

import {BackIcon} from '../../Assets/Icons';

import {useTransactions} from './useTransactions';

import {formatFormDate} from '../../Utils/helpers';

import {formattedDate} from '../../Utils/helpers';

// const groupTransactionsByMonthYear = transactions => {
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const grouped = {};
//   transactions.forEach(transaction => {
//     const monthYear = formatFormDate(transaction.time).slice(3, 11);

//     const newDate = monthYear[0] === '0' ? monthYear.slice(1, 12) : monthYear;

//     console.log(newDate);
//     console.log(monthYear);
//     if (!grouped[monthYear]) {
//       grouped[monthYear] = [];
//     }
//     grouped[monthYear].push(transaction);
//   });
//   return grouped;
// };

const groupTransactionsByMonthYear = transactions => {
  const grouped = {};
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  transactions?.forEach(transaction => {
    const date = new Date(transaction.time);
    const monthName = months[date.getMonth()]; // Get the month name
    console.log(monthName);
    const monthYear = `${monthName}, ${date.getFullYear()}`;

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(transaction);
  });

  return grouped;
};

function TransactionScreen({navigation, handleNavigateBack}) {
  const {transactions, isLoading, totalIncome, totalExpense, totalBalance} =
    useTransactions();

  const groupedTransactions = groupTransactionsByMonthYear(transactions);

  //deleting all data
  const clearAll = () => {};

  const handleEdit = () => {};

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
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {Object.entries(groupedTransactions).map(
          ([monthYear, transactions]) => (
            <View key={monthYear}>
              <Text style={styles.monthYear}>{monthYear}</Text>
              {transactions.map(transaction => (
                <EachTransaction
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </View>
          ),
        )}
      </ScrollView>
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
  textDeleteContainer: {
    flexDirection: 'row',
    gap: wp('5%'),
  },
  editDeleteIconView: {
    flexDirection: 'row',
    marginTop: hp('1%'),
    gap: wp('2%'),
  },
  innerContainerTwo: {
    marginVertical: hp('1%'),
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: wp('5%'),
    width: wp('90%'),
    height: hp('14%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: 'green',
  },
  expenseContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    color: 'red',
  },
  incomeData: {
    flex: 1,
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  monthYear: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
});

export default TransactionScreen;
