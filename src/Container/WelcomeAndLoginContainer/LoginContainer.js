import React from 'react';

import {LoginScreen} from '../../Screens';

function LoginContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }
  function handleNavigatetoRegister() {
    navigation.navigate('Register');
  }
  function hanldeNavigatetoForgotpassword() {
    navigation.navigate('Forgot password');
  }
  return (
    <LoginScreen
      handleNavigateBack={handleNavigateBack}
      handleNavigatetoRegister={handleNavigatetoRegister}
      hanldeNavigatetoForgotpassword={hanldeNavigatetoForgotpassword}
      navigation={navigation}
    />
  );
}
export default LoginContainer;
