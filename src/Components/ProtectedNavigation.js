import {View, StyleSheet, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../Authentication/useUser';
import CustomSpinner from './CustomSpinner';

function ProtectedNavigation({children}) {
  const navigation = useNavigation();
  const {isLoading, isAuthenticated} = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigation.replace('Login');
    }
  }, [isAuthenticated, navigation, isLoading]);

  useEffect(() => {
    const backAction = () => {
      if (isAuthenticated) {
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <CustomSpinner size={'large'} color={'black'} />
      </View>
    );
  }

  if (isAuthenticated) {
    return children;
  }

  return null;
}

export default ProtectedNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
