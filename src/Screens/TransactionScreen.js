import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CustomBottomSheet from '../Components/CustomBottomSheet';
import {DeleteIcon} from '../Assets/Icons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EditIcon from '../Assets/Icons/EditIcon';
import {useTransactions} from '../CustomHooks/useTransactions';
import {useMutation} from '@tanstack/react-query';

function TransactionScreen({navigation}) {
  const {transactions, isLoading} = useTransactions();

  const {mutate} = useMutation();

  let totalIncome = transactions
    ?.filter(currElem => currElem.type === 'income')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  let totalExpense = transactions
    ?.filter(currElem => currElem.type === 'expense')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  let totalBalance = totalIncome - totalExpense;

  //deleting all data
  const clearAll = () => {};

  const handleEdit = () => {};

  const renderingIncomeData = transactions.map(curr =>
    curr.type === 'income' ? (
      <View style={styles.innerContainerTwo}>
        <View key={curr.id} style={styles.textDeleteContainer}>
          <View style={styles.incomeItem}>
            <Text style={styles.textContent}>{curr.type}</Text>

            <Text style={styles.textContent}>Date and Time: {curr.time}</Text>
            <Text style={styles.textContent}>
              Description: {curr.description}
            </Text>

            <Text style={styles.textContent}>
              Your Income: {curr.amount}.Rs
            </Text>
          </View>
          <View style={styles.editDeleteIconView}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
              <DeleteIcon height={hp('8%')} width={wp('6%')} color={'red'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleEdit(curr)}
              activeOpacity={0.6}>
              <EditIcon height={hp('8%')} width={wp('6%')} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ) : (
      <View onPress={() => handleEdit(curr)} style={styles.innerContainerTwo}>
        <View key={curr.id} style={styles.textDeleteContainer}>
          <View style={styles.expenseItem}>
            <Text style={styles.expenseContent}>{curr.type}</Text>

            <Text style={styles.expenseContent}>
              Date and Time: {curr.time}
            </Text>
            <Text style={styles.expenseContent}>
              Description: {curr.description}
            </Text>

            <Text style={styles.expenseContent}>
              Your Expense: {curr.amount}.Rs
            </Text>
          </View>
          <View style={styles.editDeleteIconView}>
            <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
              <DeleteIcon height={hp('8%')} width={wp('6%')} color={'red'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleEdit(curr)}
              activeOpacity={0.6}>
              <EditIcon height={hp('8%')} width={wp('6%')} color={'black'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    ),
  );

  if (isLoading)
    return <ActivityIndicator style={styles.container} size={'large'} />;

  return (
    <View style={styles.container}>
      <Button title="Clear All" onPress={clearAll} color="red" />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.incomeData}>
          {/* showing income and expense data */}
          {renderingIncomeData}
          {/* {renderingExpenseData} */}
        </View>
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
});

export default TransactionScreen;
