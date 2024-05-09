import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {formattedDate} from '../../Utils/helpers';
import ForwardIcon from '../../Assets/Icons/ForwardIcon';

function EachTransaction({transaction}) {
  const {id, amount, description, time, type} = transaction;

  let date = formattedDate(time).formatted.slice(5, 7);

  return (
    <>
      {type === 'income' ? (
        <View style={styles.container} key={id}>
          <View style={styles.dateDescriptionContainer}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              <Text style={styles.incomeAmount}>{amount}</Text>
              <Text style={styles.incomeDescription}>{description}</Text>
            </View>
          </View>

          <View style={styles.editDeleteView}>
            <ForwardIcon color={'black'} height={45} width={45} />
          </View>
        </View>
      ) : (
        <View style={styles.container} key={id}>
          <View style={styles.dateDescriptionContainer}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              <Text style={styles.expenseAmount}>{amount}</Text>
              <Text style={styles.expenseDescription}>{description}</Text>
            </View>
          </View>

          <View style={styles.editDeleteView}>
            <TouchableOpacity>
              <ForwardIcon color={'black'} height={45} width={45} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export default EachTransaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: '3%',
    height: hp('10%'),
    width: wp('100%'),
  },
  dateDescriptionContainer: {
    flexDirection: 'row',
    gap: 20,
    marginLeft: '2%',
  },
  incomeDescription: {
    color: 'green',
  },
  incomeAmount: {
    color: 'green',
  },
  expenseDescription: {
    color: 'darkred',
  },
  expenseAmount: {
    color: 'darkred',
  },
  date: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: hp('5%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#ffff',
  },
  editDeleteView: {
    flexDirection: 'row',
    gap: 10,
  },
});
