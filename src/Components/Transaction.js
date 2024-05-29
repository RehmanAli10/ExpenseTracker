import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {formatFormDate} from '../Utils/helpers';
import PopUp from './PopUp';
import AlertModal from './AlertModal';
import ForwardIcon from '../Assets/Icons/ForwardIcon';

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
  deleteModalVisible,
  setDeleteModalVisible,
  selectedTransaction,
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
          handleDelete={handleDelete}
          id={selectedTransaction}
          amount={amount}
          time={time}
          description={description}
          type={type}
          handleEdit={handleEdit}
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
        />
      )}

      {deleteModalVisible && (
        <AlertModal
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
          handleDelete={handleDelete}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          id={selectedTransaction}
        />
      )}

      <View style={styles.container}>
        <View style={styles.dateDescriptionContainer}>
          <View style={styles.date}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View>
            <Text
              style={
                type === 'income' ? styles.incomeAmount : styles.expenseAmount
              }>
              {amount}
            </Text>
            <TouchableOpacity onPress={() => handleModal(description, id)}>
              <Text
                style={
                  type === 'income'
                    ? styles.incomeDescription
                    : styles.expenseDescription
                }>
                {truncateDescription(description, 25)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.editDeleteView}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              handleModal(description, id);
            }}>
            <ForwardIcon color={'black'} height={45} width={45} />
          </TouchableOpacity>
        </View>
      </View>
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
