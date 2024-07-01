import React from 'react';
import SettingsScreen from '../Screens/SettingsScreen';

function SettingsContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateUpdateuserScreen() {
    navigation.navigate('Update User');
  }

  return (
    <SettingsScreen
      handleNavigateBack={handleNavigateBack}
      handleNavigateUpdateuserScreen={handleNavigateUpdateuserScreen}
    />
  );
}

export default SettingsContainer;
