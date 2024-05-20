import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {convertToTimestamptz, formatFormDate} from '../../Utils/helpers';
import {useAddIncome} from './useAddIncome';
import CustomNotifications from '../../Components/CustomNotifications';

function IncomeFormScreen() {
  const route = useRoute();
  const {index} = route.params || {};

  const {addIncome, isNotificationIncome, setIsNotificationIncome, message} =
    useAddIncome();

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

  // date and time states
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const newDate = convertToTimestamptz(date);
    console.log(newDate);
    setDateTimeEvent(newDate);
    hideDatePicker();
  };

  const handleAddIncome = () => {
    if (eventDescription && dateTimeEvent && inputValueEvent) {
      addIncome({
        amount: inputValueEvent,
        description: eventDescription,
        time: dateTimeEvent,
        type: 'income',
      });
      setEventDescription('');
      setDateTimeEvent(formatFormDate(new Date()));
      setInputValueEvent('');
    } else {
      Alert.alert('one or more fields left empty');
    }
  };

  const handleEdit = () => {
    const newIndex = {
      description: eventDescription,
      amount: parseFloat(inputValueEvent),
      type: 'income',
      time: dateTimeEvent,
      id: index.id,
    };
    e;

    setEventDescription('');
    setDateTimeEvent(formatFormDate(new Date()));
    setInputValueEvent('');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {isNotificationIncome && (
          <CustomNotifications
            isNotification={isNotificationIncome}
            setIsNotification={setIsNotificationIncome}
            message={message}
            backgroundColor={'green'}
            duration={1500}
          />
        )}
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
                <Text style={styles.dateTimeStyle}>
                  <Text>{dateTimeEvent}</Text>
                </Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="datetime"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.incomeBox}>
            <Text style={styles.amountHeading}>Amount</Text>
            <TextInput
              placeholder="Amount"
              value={String(inputValueEvent)}
              keyboardType="phone-pad"
              style={[styles.amountBox, {borderColor: 'green'}]}
              // detecting the changed state
              onChangeText={text => setInputValueEvent(text)}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          {index ? (
            <TouchableOpacity
              style={[styles.buttonAdd, {backgroundColor: 'green'}]}
              activeOpacity={0.8}
              // setting the data in an empty array state
              onPress={handleEdit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.buttonAdd, {backgroundColor: 'green'}]}
              activeOpacity={0.8}
              // setting the data in an empty array state
              onPress={handleAddIncome}>
              <Text style={styles.buttonText}>Add Income</Text>
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
  },
  notification: {
    flex: 2,
    position: 'absolute',
    backgroundColor: 'Yellow',
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
  incomeBox: {
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

export default IncomeFormScreen;
