import {useQuery} from '@tanstack/react-query';
import {getCurrentUser} from '../Services/apiAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
    onError: err => {
      console.error('Error fetching user:', err);
    },
  });

  console.log('useUser', user);

  if (user)
    await AsyncStorage.setItem(
      'session',
      user?.role === 'authenticated' ? 'true' : 'false',
    );

  return {user, isLoading, isAuthenticated: user?.role === 'authenticated'};
}
