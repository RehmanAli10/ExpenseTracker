import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {convertToTimestamptz} from '../../Utils/helpers';
import {useAddExpense} from './useAddExpense';
import {useEditTransaction} from './useEditTransaction';
import {useUser} from '../../Authentication/useUser';

function ExpenseFormScreen() {
  const route = useRoute();
  const {index} = route.params || {};

  const {addExpense} = useAddExpense();
  const {editTransaction} = useEditTransaction();
  const {user} = useUser();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [inputValueEvent, setInputValueEvent] = useState(
    index ? index.amount : '',
  );
  const [eventDescription, setEventDescription] = useState(
    index ? index.description : '',
  );
  const [dateTimeEvent, setDateTimeEvent] = useState(
    index ? index.time : convertToTimestamptz(new Date()),
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const newDate = convertToTimestamptz(date);
    setDateTimeEvent(newDate);
    hideDatePicker();
  };

  const handleAddExpense = () => {
    if (eventDescription && dateTimeEvent && inputValueEvent) {
      addExpense({
        amount: inputValueEvent,
        description: eventDescription,
        time: dateTimeEvent,
        type: 'expense',
        UserUID: user.id,
      });
      setEventDescription('');
      setDateTimeEvent(convertToTimestamptz(new Date()));
      setInputValueEvent('');
    } else {
      Alert.alert('one or more fields left empty');
    }
  };

  const handleEdit = () => {
    const newIndex = {
      description: eventDescription,
      amount: parseFloat(inputValueEvent),
      type: 'expense',
      time: dateTimeEvent,
      id: index.id,
    };
    editTransaction(newIndex);

    setEventDescription('');
    setDateTimeEvent(convertToTimestamptz(new Date()));
    setInputValueEvent('');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <View style={styles.infoView}>
          <View style={styles.descriptionBox}>
            <Text style={styles.amountHeading}>Description</Text>
            <TextInput
              placeholder="Note"
              value={eventDescription}
              style={styles.amountBoxTwo}
              onChangeText={text => {
                setEventDescription(text);
              }}
            />
          </View>

          <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
            <View style={styles.dateTimeBox}>
              <Text style={styles.amountHeading}>Select Date and Time</Text>
              <View>
                <Text style={styles.dateTimeStyle}>{dateTimeEvent}</Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="datetime"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.expenseBox}>
            <Text style={styles.amountHeading}>Amount</Text>
            <TextInput
              placeholder="Amount"
              keyboardType="phone-pad"
              value={String(inputValueEvent)}
              style={[styles.amountBox, {borderColor: 'darkred'}]}
              onChangeText={text => setInputValueEvent(text)}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          {index ? (
            <TouchableOpacity
              style={[styles.buttonAdd, {backgroundColor: '#dc3545'}]}
              activeOpacity={0.8}
              onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonAdd, {backgroundColor: '#dc3545'}]}
              activeOpacity={0.8}
              onPress={handleAddExpense}>
              <Text style={styles.buttonText}>Add Expense</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: hp('2%'),
    backgroundColor: '#f0f4f7',
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  infoView: {
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  descriptionBox: {
    width: wp('90%'),
    marginBottom: hp('2%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: '#ffffff',
    borderRadius: wp('4%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dateTimeBox: {
    width: wp('90%'),
    marginBottom: hp('2%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: '#ffffff',
    borderRadius: wp('4%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  expenseBox: {
    width: wp('90%'),
    marginBottom: hp('2%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: '#ffffff',
    borderRadius: wp('4%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  amountHeading: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  amountBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#333',
    paddingVertical: hp('0.5%'),
  },
  amountBoxTwo: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#333',
    paddingVertical: hp('0.5%'),
  },
  buttonAdd: {
    width: wp('85%'),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    marginTop: hp('2%'),
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
  },
  dateTimeStyle: {
    color: '#333',
  },
});

export default ExpenseFormScreen;
