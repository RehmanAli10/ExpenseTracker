import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useUser} from '../Authentication/useUser';
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
  UpdateUserContainer,
} from '../Container';
import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
import Drawer from '../Components/Drawer';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Navigation() {
  const {isAuthenticated} = useUser();

  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      const currentRoute = navigation.getCurrentRoute();

      if (currentRoute.name === 'Home') {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      } else if (
        currentRoute.name === 'IncomeFormScreen' ||
        currentRoute.name === 'Update User' ||
        currentRoute.name === 'income' ||
        currentRoute.name === 'transactions' ||
        currentRoute.name === 'Calendar' ||
        currentRoute.name === 'Drawer' ||
        currentRoute.name === 'Settings' ||
        currentRoute.name === 'Report'
      ) {
        navigation.navigate('Home');
        return true;
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  const initialRouteName = isAuthenticated ? 'Home' : 'Welcome';

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
        name="Update User"
        component={UpdateUserContainer}
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
  );
}

export default Navigation;
