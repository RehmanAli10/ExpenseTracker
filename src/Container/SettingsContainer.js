import React from 'react';
import SettingsScreen from '../Screens/SettingsScreen';

function SettingsContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }
  const currencyDropdownData = [
    {label: 'RUP', value: 'Rs'},
    {label: 'USD', value: '$'},
    {label: 'EUR', value: '€'},
  ];
  return (
    <SettingsScreen
      currencyDropdownData={currencyDropdownData}
      handleNavigateBack={handleNavigateBack}
    />
  );
}

export default SettingsContainer;
