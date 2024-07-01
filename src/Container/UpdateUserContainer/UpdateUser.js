import React from 'react';
import {UpdateUserScreen} from '../../Screens';

function UpdateUserContainer({navigation}) {
  function handleNavigateBack() {
    navigation.goBack();
  }
  return <UpdateUserScreen handleNavigateBack={handleNavigateBack} />;
}

export default UpdateUserContainer;
