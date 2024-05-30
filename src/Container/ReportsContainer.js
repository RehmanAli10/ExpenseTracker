import React from 'react';
import {ReportScreen} from '../Screens';

function ReportsContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }
  return <ReportScreen handleNavigateBack={handleNavigateBack} />;
}

export default ReportsContainer;
