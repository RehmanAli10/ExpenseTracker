import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const CustomSpinner = ({
  size,
  color,
  backgroundColor = null,
  message = message,
  marginVertical = marginVertical,
  fontSize = fontSize,
}) => {
  if (size === 'small') return <ActivityIndicator size={size} color={color} />;

  // if (size === 'large') return <ActivityIndicator size={size} color={color} />;

  const containerStyles = {
    backgroundColor: backgroundColor,
  };
  const textStyles = {
    marginVertical: marginVertical,
    fontSize: fontSize,
  };
  return (
    <View style={[styles.container, containerStyles]}>
      <ActivityIndicator size={size} color={color} />
      <Text style={[styles.messageText, textStyles]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },

  messageText: {
    fontWeight: 'bold',
  },
});

export default CustomSpinner;
