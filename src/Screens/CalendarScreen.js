import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

function CalendarScreen() {
  const [selected, setSelected] = useState('');
  return (
    <View>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
        style={{
          height: 350,
        }}
      />
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({});
