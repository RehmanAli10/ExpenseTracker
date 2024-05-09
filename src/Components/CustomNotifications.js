import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function CustomNotifications({
  message = 'Add Your Message Here',
  width = wp('100%'),
  backgroundColor = 'lightblue',
  borderBottomRadius = wp('1%'),
  color = 'white',
  duration = 2000,
  isNotification = false,
  setIsNotification,
}) {
  const containerStyles = {
    width: width,
    backgroundColor: backgroundColor,
    borderBottomRadius: borderBottomRadius,
  };
  const messageStyle = {
    color: color,
  };

  useEffect(() => {
    if (!isNotification) return;

    setTimeout(() => {
      if (isNotification) {
        setIsNotification(false);
      }
    }, duration);
  }, [isNotification]);
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
