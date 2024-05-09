import React from 'react';
import {TransactionScreen} from '../Screens';

function TransactionContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <TransactionScreen
      navigation={navigation}
      handleNavigateBack={handleNavigateBack}
    />
  );
}
export default TransactionContainer;
