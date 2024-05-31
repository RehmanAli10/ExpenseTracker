import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {
  RegisterContainer,
  HomeContainer,
  IncomeContainer,
  TransactionContainer,
  SettingsContainer,
  ReportsContainer,
} from '../Container';

import {
  WelcomeContainer,
  LoginContainer,
  CalendarContainer,
} from '../Container';
import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
import Drawer from '../Components/Drawer';
import {ToastProvider} from 'react-native-toast-notifications';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function Navigation() {
  return (
    <ToastProvider
      successColor="green"
      duration={1000}
      placement="top"
      warningColor="darkred">
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Welcome'}>
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
              name="Home"
              component={HomeContainer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="income"
              component={IncomeContainer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="transactions"
              component={TransactionContainer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="IncomeFormScreen"
              component={IncomeFormScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ExpenseFormScreen"
              component={ExpenseFormScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Calendar"
              component={CalendarContainer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Drawer"
              component={Drawer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsContainer}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Report"
              component={ReportsContainer}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ToastProvider>
  );
}
export default Navigation;
