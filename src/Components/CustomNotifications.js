import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useMainContext} from '../Contexts/MainContext';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function CustomNotifications({
  message = 'Add Your Message Here',
  width = wp('100%'),
  backgroundColor = 'lightblue',
  borderBottomRadius = wp('1%'),
  color = 'white',
  duration = 2000,
}) {
  const {dispatch, isNotificationIncome, isNotificationExpense} =
    useMainContext();
  const containerStyles = {
    width: width,
    backgroundColor: backgroundColor,
    borderBottomRadius: borderBottomRadius,
  };
  const messageStyle = {
    color: color,
  };

  useEffect(() => {
    if (!isNotificationIncome && !isNotificationExpense) return;

    setTimeout(() => {
      if (isNotificationIncome) {
        dispatch({type: 'notification', payload: {notify: false}});
      } else {
        dispatch({type: 'expNotification', payload: {notify: false}});
      }
    }, duration);
  }, [isNotificationIncome, isNotificationExpense]);
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={messageStyle}>{message}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
