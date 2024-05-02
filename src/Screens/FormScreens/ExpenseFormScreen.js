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

import CustomNotifications from '../../Components/CustomNotifications';
import {formattedDate} from '../../Utils/helpers';

function ExpenseFormScreen() {
  const route = useRoute();
  const {index} = route.params || {};

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [inputValueEvent, setInputValueEvent] = useState(
    index ? index.amount : '',
  );
  const [eventDescription, setEventDescription] = useState(
    index ? index.description : '',
  );
  const [dateTimeEvent, setDateTimeEvent] = useState(
    index ? index.time : formattedDate(new Date()),
  );

  // date and time functions
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const newDate = formattedDate(date);
    setDateTimeEvent(newDate);
    hideDatePicker();
  };

  const handleAddExpense = () => {
    if (eventDescription && dateTimeEvent && inputValueEvent) {
      setEventDescription('');
      setDateTimeEvent(formattedDate(new Date()));
      setInputValueEvent('');
    } else {
      Alert.alert('one or more fields left empty');
    }
  };

  const handleEdit = () => {
    const newIndex = {
      description: eventDescription,
      amount: parseFloat(inputValueEvent),
      type: 'Expense',
      time: dateTimeEvent,
      id: index.id,
    };

    setEventDescription('');
    setDateTimeEvent(formattedDate(new Date()));
    setInputValueEvent('');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* {isNotificationExpense && (
          <CustomNotifications
            message={message}
            backgroundColor={'darkred'}
            duration={1500}
          />
        )} */}

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
              style={[styles.buttonAdd, {backgroundColor: 'darkred'}]}
              activeOpacity={0.8}
              onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonAdd, {backgroundColor: 'darkred'}]}
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
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  infoView: {
    alignItems: 'center',
  },
  descriptionBox: {
    width: wp('95%'),
    marginTop: hp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  dateTimeBox: {
    width: wp('95%'),
    marginTop: hp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  expenseBox: {
    width: wp('95%'),
    marginTop: hp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('4%'),
  },
  amountHeading: {
    color: 'black',
    fontWeight: 'bold',
  },
  amountBox: {
    borderBottomWidth: 1,
    color: 'black',
  },
  amountBoxTwo: {
    borderBottomWidth: 1,
    color: 'black',
  },
  buttonAdd: {
    width: wp('89%'),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    marginTop: hp('5%'),
  },
  buttonView: {
    paddingVertical: hp('2%'),
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  buttonText: {
    color: 'white',
  },
  dateTimeStyle: {
    color: 'black',
  },
});

export default ExpenseFormScreen;
