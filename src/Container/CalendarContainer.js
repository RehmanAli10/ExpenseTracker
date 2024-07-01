import React from 'react';
import {CalendarScreen} from '../Screens';

function CalendarContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <CalendarScreen
      navigation={navigation}
      handleNavigateBack={handleNavigateBack}
    />
  );
}

export default CalendarContainer;
