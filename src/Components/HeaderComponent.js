import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HeaderComponent({headerFirstIcon, text, headerSecondIcon, newIcon}) {
  if (newIcon)
    return (
      <View
        style={[styles.container, {justifyContent: 'flex-start', gap: 110}]}>
        <View style={styles.newIconView}>{newIcon}</View>
        <View>
          <Text style={styles.text}>Transactions</Text>
        </View>
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
  newIconView: {
    padding: '1%',
  },
  secondIconView: {
    padding: '6%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
