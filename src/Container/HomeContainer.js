import React, {useState} from 'react';

import {HomeScreen} from '../Screens';

function HomeContainer({navigation}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    />
  );
}
export default HomeContainer;
