import React, {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';

import {HomeScreen} from '../Screens';
import {useLogout} from '../Authentication/useLogout';
import {useUser} from '../Authentication/useUser';

function HomeContainer({navigation}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const {logOut, isPending} = useLogout();

  const {isAuthenticated, isLoading} = useUser();

  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     navigation.replace('Login');
  //   }
  // }, [isAuthenticated, navigation, isLoading]);

  const handleNavigate = () => {
    navigation.navigate('income');
  };
  const handleNavigateTransactions = () => {
    navigation.navigate('transactions');
  };

  const handleNavigateHome = () => {
    navigation.navigate('Home');
  };

  const handleNavigateCalendar = () => {
    navigation.navigate('Calendar');
  };
  const handleNavigateSetting = () => {
    navigation.navigate('Settings');
  };

  const handleNavigateLogin = () => {
    navigation.navigate('Login');
  };

  const handleNavigateReport = () => {
    navigation.navigate('Report');
  };

  return (
    <HomeScreen
      handleNavigate={handleNavigate}
      handleNavigateTransactions={handleNavigateTransactions}
      handleNavigateHome={handleNavigateHome}
      handleNavigateCalendar={handleNavigateCalendar}
      handleNavigateSetting={handleNavigateSetting}
      isDrawerOpen={isDrawerOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      handleNavigateLogin={handleNavigateLogin}
      handleNavigateReport={handleNavigateReport}
      logOut={logOut}
      isPending={isPending}
    />
  );
}
export default HomeContainer;
