import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {DeleteIcon} from '../Assets/Icons';
import EditIcon from '../Assets/Icons/EditIcon';
import {formattedDate} from '../Utils/helpers';

function EachTransaction({trans, key}) {
  const {amount, description, time, type} = trans;

  const date = formattedDate(time).slice(0, 2);

  return (
    <>
      {type === 'income' ? (
        <View style={styles.container} key={key}>
          <View style={styles.dateDescriptionContainer}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              <Text>{amount}</Text>
              <Text>Description</Text>
            </View>
          </View>

          <View style={styles.editDeleteView}>
            <DeleteIcon height={hp('8%')} width={wp('6%')} color={'red'} />
            <EditIcon height={hp('8%')} width={wp('6%')} color={'black'} />
          </View>
        </View>
      ) : (
        <View style={styles.container} key={key}>
          <View style={styles.dateDescriptionContainer}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              <Text>{amount}</Text>
              <Text>Description</Text>
            </View>
          </View>

          <View style={styles.editDeleteView}>
            <DeleteIcon height={hp('8%')} width={wp('6%')} color={'red'} />
            <EditIcon height={hp('8%')} width={wp('6%')} color={'black'} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: '3%',
    height: hp('10%'),
    width: wp('100%'),
    gap: 190,
  },
  dateDescriptionContainer: {
    flexDirection: 'row',
    gap: 20,
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
