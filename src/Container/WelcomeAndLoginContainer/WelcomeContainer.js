import React, {useState, useEffect} from 'react';
import WelcomeScreen from '../../Screens/WelcomeAndLoginScreens/WelcomeScreen';

function WelcomeContainer({navigation}) {
  const handleNavigatetoLogin = () => {
    navigation.navigate('Login');
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <WelcomeScreen
      handleNavigatetoLogin={handleNavigatetoLogin}
      handleNavigatetoRegister={handleNavigatetoRegister}
      navigation={navigation}
    />
  );
}

export default WelcomeContainer;
