import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IncomeFormScreen from '../Screens/FormScreens/IncomeFormScreen';
import ExpenseFormScreen from '../Screens/FormScreens/ExpenseFormScreen';

const Tab = createMaterialTopTabNavigator();

function ToptabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: route.name === 'Income' ? '#29F300' : 'darkred',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
        tabBarStyle: {backgroundColor: 'black'},
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
      })}>
      <Tab.Screen name="Income" component={IncomeFormScreen} />
      <Tab.Screen name="Expense" component={ExpenseFormScreen} />
    </Tab.Navigator>
  );
}

export default ToptabNavigation;
