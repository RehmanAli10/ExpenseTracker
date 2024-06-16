// import * as React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {useUser} from '../Authentication/useUser';
// import {
//   WelcomeContainer,
//   RegisterContainer,
//   LoginContainer,
//   HomeContainer,
//   IncomeContainer,
//   TransactionContainer,
//   CalendarContainer,
//   SettingsContainer,
//   ReportsContainer,
// } from '../Container';
// import {IncomeFormScreen, ExpenseFormScreen} from '../Screens';
// import Drawer from '../Components/Drawer';
// import {useAsyncstorage} from '../CustomHooks/useAsyncstorage';

// const Stack = createNativeStackNavigator();

// function Navigation() {
//   const {isAuthenticated} = useUser();
//   // const {user} = useAsyncstorage(false, 'session');

//   const [authenticated, setAuthenticated] = React.useState(function () {
//     const {user} = useAsyncstorage(false, 'session');
//     return user;
//   });

//   console.log('isAuthenticated', isAuthenticated);
//   console.log('user', authenticated);

//   return (
//     <Stack.Navigator
//       initialRouteName={isAuthenticated || authenticated ? 'Home' : 'Welcome'}>
//       <Stack.Screen
//         name="Welcome"
//         component={WelcomeContainer}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Register"
//         component={RegisterContainer}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Login"
//         component={LoginContainer}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Home"
//         options={{headerShown: false}}
//         component={HomeContainer}
//       />
//       <Stack.Screen
//         name="income"
//         options={{headerShown: false}}
//         component={IncomeContainer}
//       />
//       <Stack.Screen
//         name="transactions"
//         options={{headerShown: false}}
//         component={TransactionContainer}
//       />
//       <Stack.Screen
//         name="IncomeFormScreen"
//         options={{headerShown: false}}
//         component={IncomeFormScreen}
//       />
//       <Stack.Screen
//         name="ExpenseFormScreen"
//         options={{headerShown: false}}
//         component={ExpenseFormScreen}
//       />
//       <Stack.Screen
//         name="Calendar"
//         options={{headerShown: false}}
//         component={CalendarContainer}
//       />
//       <Stack.Screen
//         name="Drawer"
//         options={{headerShown: false}}
//         component={Drawer}
//       />
//       <Stack.Screen
//         name="Settings"
//         options={{headerShown: false}}
//         component={SettingsContainer}
//       />
//       <Stack.Screen
//         name="Report"
//         options={{headerShown: false}}
//         component={ReportsContainer}
//       />
//     </Stack.Navigator>
//   );
// }

// export default Navigation;

// Navigation.js
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
import {useAsyncStorage} from '../CustomHooks/useAsyncstorage';
import CustomSpinner from '../Components/CustomSpinner';

const Stack = createNativeStackNavigator();

function Navigation() {
  const {isAuthenticated} = useUser();
  const {data: authenticated, isLoading} = useAsyncStorage('session', false);

  if (isLoading) {
    return <CustomSpinner size={'large'} color={'lightgrey'} />; // Render a loading indicator if data is still loading
  }

  console.log('isAuthenticated', isAuthenticated);
  console.log('authenticated', authenticated);

  // Determine initial route based on authentication state
  const initialRouteName =
    isAuthenticated || authenticated ? 'Home' : 'Welcome';

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
