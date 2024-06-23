import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useUpdateUser} from '../Container/UpdateUserContainer/useUpdateUser';
import CustomSpinner from '../Components/CustomSpinner';
import {allUsers} from '../Services/apiAuth';

function UpdateUserScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {updateUser, isPending} = useUpdateUser();

  function handleUpdate() {
    if (!email || !password) return;

    updateUser({email, password});
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.usernameInputText}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter a Email"
          placeholderTextColor="gray"
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.passwordInputText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="gray"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.8}
          onPress={handleUpdate}>
          <Text style={styles.loginButtonText}>
            {isPending ? (
              <CustomSpinner color={'grey'} size={'small'} />
            ) : (
              <Text>Update password</Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UpdateUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
  },
  usernameInputText: {
    marginRight: wp('75%'),
    color: 'black',
    fontWeight: 'bold',
  },
  passwordInputText: {
    marginRight: wp('70%'),
    color: 'black',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginVertical: hp('5%'),
    alignItems: 'center',
  },
  input: {
    height: hp('7%'),
    width: wp('85%'),
    marginTop: hp('1%'),
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: wp('4%'),
    marginBottom: hp('1%'),
    borderRadius: wp('4%'),
    color: 'black',
  },
  registerButtonView: {
    marginTop: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp('1%'),
  },
  registerButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  buttonView: {
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: hp('2%'),
    width: wp('80%'),
    borderRadius: wp('4%'),
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
