import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HeaderComponent({headerFirstIcon, text, headerSecondIcon, newIcon}) {
  if (newIcon)
    return (
      <View style={styles.container}>
        <View style={styles.firtsIconView}>{newIcon}</View>
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={styles.firtsIconView}>{headerFirstIcon}</View>
      <View>
        <Text>{text}</Text>
      </View>
      <View style={styles.secondIconView}>{headerSecondIcon}</View>
    </View>
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: hp('6%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firtsIconView: {
    padding: '6%',
  },
  secondIconView: {
    padding: '6%',
  },
});
