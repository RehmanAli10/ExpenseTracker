import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {formatFormDate} from '../Utils/helpers';

import ForwardIcon from '../Assets/Icons/ForwardIcon';
import EditIcon from '../Assets/Icons/EditIcon';
import {DeleteIcon} from '../Assets/Icons';

import PopUp from './PopUp';

function Transaction({
  id,
  amount,
  time,
  description,
  type,
  handleEdit,
  handleDelete,
  handleModal,
  modalVisible,
  setModalVisible,
  detailDescription,
}) {
  let date = formatFormDate(time).slice(8, 10);

  const truncateDescription = (desc, maxLength) => {
    return desc.length > maxLength ? `${desc.slice(0, maxLength)}...` : desc;
  };

  return (
    <>
      {modalVisible && (
        <PopUp
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          detailDescription={detailDescription}
        />
      )}

      {type === 'income' ? (
        <View style={styles.container}>
          <View style={styles.dateDescriptionContainer}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              <Text style={styles.incomeAmount}>{amount}</Text>
              <TouchableOpacity onPress={() => handleModal(description)}>
                <Text style={styles.incomeDescription}>
                  {truncateDescription(description, 25)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.editDeleteView}>
            <TouchableOpacity
              onPress={() => handleEdit({id, amount, time, description, type})}>
              <EditIcon height={25} width={25} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(id)}>
              <DeleteIcon height={25} width={25} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.dateDescriptionContainer}>
            <View style={styles.date}>
              <Text style={styles.dateText}>{date}</Text>
            </View>
            <View>
              <Text style={styles.expenseAmount}>{amount}</Text>
              <TouchableOpacity onPress={() => handleModal(description)}>
                <Text style={styles.expenseDescription}>
                  {truncateDescription(description, 25)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.editDeleteView}>
            <TouchableOpacity
              onPress={() => handleEdit({id, amount, time, description, type})}>
              <EditIcon height={25} width={25} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(id)}>
              <DeleteIcon height={25} width={25} color={'red'} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

export default Transaction;

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
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    flexDirection: 'row',
    gap: 10,
  },
});
