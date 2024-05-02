import React from 'react';

import {LoginScreen} from '../../Screens';




export default function LoginContainer({navigation}) {

  const handleNavigateBack = () => {
    navigation.goBack();
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <LoginScreen
      handleNavigateBack={handleNavigateBack}
      handleNavigatetoRegister={handleNavigatetoRegister}
      navigation={navigation}
    />
  );
}
