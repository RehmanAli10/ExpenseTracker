import * as React from 'react';
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
} from '../Container';
import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
import Drawer from '../Components/Drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomSpinner from '../Components/CustomSpinner';

const Stack = createNativeStackNavigator();

function Navigation() {
  const {isAuthenticated} = useUser();
  const [authenticated, setAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function checkingSession() {
      try {
        const value = await AsyncStorage.getItem('session');
        console.log('value', value);
        if (value === 'true') {
          setAuthenticated(true);
        }
      } catch (e) {
        console.error('Error reading session from AsyncStorage', e);
      } finally {
        setLoading(false);
      }
    }
    checkingSession();
  }, []);

  if (loading) {
    // You can return a loading spinner or null while checking the session
    return <CustomSpinner color={'lightgrey'} size={'large'} />;
  }

  // Determine initial route based on authentication state
  const initialRouteName =
    authenticated || isAuthenticated ? 'Home' : 'Welcome';

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
