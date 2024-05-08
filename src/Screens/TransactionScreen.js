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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useMutation} from '@tanstack/react-query';

import CustomBottomSheet from '../Components/CustomBottomSheet';
import {DeleteIcon} from '../Assets/Icons';
import EachTransaction from './EachTransaction';
import EditIcon from '../Assets/Icons/EditIcon';
import {BackIcon} from '../Assets/Icons';

import {useTransactions} from '../CustomHooks/useTransactions';
import HeaderComponent from '../Components/HeaderComponent';

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

  if (isLoading)
    return <ActivityIndicator style={styles.container} size={'large'} />;

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={<BackIcon color={'white'} height={'8%'} width={'8%'} />}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {transactions?.map(trans => (
          <EachTransaction key={trans.id} trans={trans} />
        ))}
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
