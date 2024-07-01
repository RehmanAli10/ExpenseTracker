import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useUser} from '../Authentication/useUser';
import HeaderComponent from '../Components/HeaderComponent';
import BackIcon from '../Assets/Icons/BackIcon';
import ForwardIcon from '../Assets/Icons/ForwardIcon';
import {useClearallTransactions} from './useClearallTransactions';
import {Dropdown} from 'react-native-element-dropdown';
import {useSettings} from './useSettings';
import {useSettingsUpdate} from './useSettingsUpdate';

function SettingsScreen({handleNavigateBack, handleNavigateUpdateuserScreen}) {
  const {user} = useUser();

  const {settings, isLoading} = useSettings();

  const {clearAllTransaction} = useClearallTransactions();

  const [selectedCurrency, setSelectedCurrency] = useState('$');

  const {isUpdating, updateSettings} = useSettingsUpdate();

  useEffect(
    function () {
      if (settings && settings.length > 0) {
        setSelectedCurrency(settings[0].settingCurrency || '$');
      }
    },
    [settings],
  );

  function handleClearAllTransactions() {
    clearAllTransaction(user?.id);
  }

  function handleProfile() {
    handleNavigateUpdateuserScreen();
  }

  function handleCurrencyChange(curr) {
    if (user && user?.id) {
      updateSettings({curr, userId: user?.id});
    } else {
      console.error('User Id is undefined');
    }
  }

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color="white" height={30} width={30} />
          </TouchableOpacity>
        }
        headingText="Settings"
      />

      <TouchableOpacity
        style={styles.clearAllContainer}
        onPress={handleClearAllTransactions}>
        <Text style={styles.text}>Clear All Transactions</Text>
        <ForwardIcon height={25} width={25} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clearAllContainer}
        onPress={handleProfile}>
        <Text style={styles.text}>Profile</Text>
        <ForwardIcon height={25} width={25} color="black" />
      </TouchableOpacity>

      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select Currency</Text>
        <Dropdown
          style={styles.dropdown}
          data={[
            {label: 'Dollar ($)', value: '$'},
            {label: 'Rupee (Rs)', value: 'Rs'},
            {label: 'Euro (€)', value: '€'},
          ]}
          labelField="label"
          valueField="value"
          placeholder="Select a currency"
          value={isLoading ? 'Loading' : selectedCurrency}
          onChange={item => handleCurrencyChange(item.value)}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  clearAllContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '3%',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
});
