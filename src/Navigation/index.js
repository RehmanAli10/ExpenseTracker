import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useEffect, useState} from 'react';

import {
  WelcomeContainer,
  RegisterContainer,
  LoginContainer,
  HomeContainer,
  IncomeContainer,
  TransactionContainer,
  CalendarContainer,
  SettingsContainer,
  ReportsContainer,
} from '../Container';
import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
import Drawer from '../Components/Drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();

function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('session');
        if (value === 'true') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to load session', error);
      }
    }

    fetchData();
  }, []);

  console.log(isAuthenticated);

  return (
    <Stack.Navigator
      initialRouteName={
        isAuthenticated ? <HomeContainer /> : <WelcomeContainer />
      }>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeContainer}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="income"
        options={{headerShown: false}}
        component={IncomeContainer}
      />
      <Stack.Screen
        name="transactions"
        options={{headerShown: false}}
        component={TransactionContainer}
      />

      <Stack.Screen
        name="IncomeFormScreen"
        options={{headerShown: false}}
        component={IncomeFormScreen}
      />

      <Stack.Screen
        name="ExpenseFormScreen"
        options={{headerShown: false}}
        component={ExpenseFormScreen}
      />

      <Stack.Screen
        name="Calendar"
        options={{headerShown: false}}
        component={CalendarContainer}
      />

      <Stack.Screen
        name="Drawer"
        options={{headerShown: false}}
        component={Drawer}
      />

      <Stack.Screen
        name="Settings"
        options={{headerShown: false}}
        component={SettingsContainer}
      />

      <Stack.Screen
        name="Report"
        options={{headerShown: false}}
        component={ReportsContainer}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
