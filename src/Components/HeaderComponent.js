import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HeaderComponent({
  headerFirstIcon,
  text,
  headerSecondIcon,
  newIcon,
  headingText,
}) {
  if (newIcon)
    return (
      <View style={[styles.container, styles.newIconContainer]}>
        <View style={styles.newIconView}>{newIcon}</View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{headingText}</Text>
        </View>
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={styles.firstIconView}>{headerFirstIcon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.secondIconView}>{headerSecondIcon}</View>
    </View>
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  newIconContainer: {
    justifyContent: 'flex-start',
  },
  firstIconView: {
    padding: wp('2%'),
  },
  newIconView: {
    padding: wp('2%'),
  },
  secondIconView: {
    padding: wp('2%'),
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp('5%'),
  },
});
