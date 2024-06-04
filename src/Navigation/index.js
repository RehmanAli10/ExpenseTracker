import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {WelcomeContainer} from '../Container';
import {RegisterContainer} from '../Container';
import {LoginContainer} from '../Container';
import {HomeContainer} from '../Container';
import {IncomeContainer} from '../Container';
import {TransactionContainer} from '../Container';
import {IncomeFormScreen} from '../Screens';
import {ExpenseFormScreen} from '../Screens';
import {CalendarContainer} from '../Container';
import Drawer from '../Components/Drawer';
import {SettingsContainer} from '../Container';
import {ReportsContainer} from '../Container';

import ProtectedNavigation from '../Components/ProtectedNavigation';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
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
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <HomeContainer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="income" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <IncomeContainer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="transactions" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <TransactionContainer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="IncomeFormScreen" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <IncomeFormScreen {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="ExpenseFormScreen" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <ExpenseFormScreen {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="Calendar" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <CalendarContainer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="Drawer" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <Drawer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="Settings" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <SettingsContainer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
        <Stack.Screen name="Report" options={{headerShown: false}}>
          {props => (
            <ProtectedNavigation>
              <ReportsContainer {...props} />
            </ProtectedNavigation>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
