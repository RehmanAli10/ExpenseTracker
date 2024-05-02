import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import myImage from '../Assets//Images/SplashImage.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={myImage} resizeMode="contain" style={styles.image} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('100%'),
    height: hp('100%'),
  },
});
export default SplashScreen;
