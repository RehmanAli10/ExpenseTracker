import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAsyncStorage(key, initialState) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem(key);
        console.log('value async storage', value);
        if (value !== null) {
          setData(value === 'true');
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [key]);

  return {data, isLoading};
}
