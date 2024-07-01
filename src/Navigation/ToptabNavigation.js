import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IncomeFormScreen from '../Screens/FormScreens/IncomeFormScreen';
import ExpenseFormScreen from '../Screens/FormScreens/ExpenseFormScreen';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';

import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function ToptabNavigation() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon />
          </TouchableOpacity>
        }
        headingText={'Income/Expense'}
      />
      <View style={styles.tabContainer}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarActiveTintColor:
              route.name === 'Income' ? '#29F300' : 'darkred',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
            tabBarStyle: {
              backgroundColor: 'black',
              borderRadius: 16,
              justifyContent: 'center',
              alignContent: 'center',
              marginLeft: '10%',
              marginRight: '10%',
            },
            tabBarIndicatorStyle: {backgroundColor: 'transparent'},
          })}>
          <Tab.Screen name="Income" component={IncomeFormScreen} />
          <Tab.Screen name="Expense" component={ExpenseFormScreen} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  tabContainer: {
    flex: 1,
    marginTop: '10%',
  },
});

export default ToptabNavigation;
