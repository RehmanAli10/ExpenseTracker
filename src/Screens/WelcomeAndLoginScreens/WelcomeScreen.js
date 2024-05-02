import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function WelcomeScreen({handleNavigatetoLogin, handleNavigatetoRegister}) {
  return (
    <View style={styles.container}>
      <View style={styles.TextView}>
        <Text style={styles.headingText}>Welcome To Expense Tracker</Text>
        <Text style={styles.contextText}>
          Welcome to our Expense Tracker app, your personal finance companion.
          Easily manage your income and expenses, track spending habits, and
          stay on top of your budgeting goals with intuitive features and
          insightful analytics
        </Text>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={handleNavigatetoLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          activeOpacity={0.8}
          onPress={handleNavigatetoRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
  },
  TextView: {
    alignItems: 'center',
    marginBottom: hp('5%'),
  },
  contextText: {
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: wp('10%'),
    textAlign: 'center',
    color: 'black',
  },
  buttonView: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    width: wp('85%'),
    borderRadius: wp('4%'),
  },
  registerButton: {
    backgroundColor: 'lightgrey',
    paddingVertical: hp('3%'),
    paddingHorizontal: wp('5%'),
    width: wp('85%'),
    borderRadius: wp('4%'),
    marginVertical: hp('1%'),
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
