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
import {useSettings} from '../Screens/useSettings';

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
  const {settings} = useSettings();

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
              {settings?.[0]?.settingCurrency} {amount}
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
    backgroundColor: '#FFFFFF',
    marginBottom: hp('2%'),
    padding: hp('2%'),
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dateDescriptionContainer: {
    flexDirection: 'row',
    gap: wp('5%'),
    alignItems: 'center',
  },
  incomeDescription: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  incomeAmount: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
  },
  expenseDescription: {
    color: 'darkred',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
  expenseAmount: {
    color: 'darkred',
    fontWeight: 'bold',
    fontSize: wp('4.5%'),
  },
  date: {
    backgroundColor: 'black',
    borderRadius: wp('10%'),
    height: hp('5%'),
    width: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
  },
  editDeleteView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp('2%'),
  },
});
