import React from 'react';
import {RegisterScreen} from '../../Screens';

export default function RegisterContainer({navigation}) {
  const handleNavigate = () => {
    navigation.navigate('Login');
  };

  return (
    <RegisterScreen handleNavigate={handleNavigate} navigation={navigation} />
  );
}
