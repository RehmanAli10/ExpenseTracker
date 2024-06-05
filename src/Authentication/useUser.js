import {useQuery} from '@tanstack/react-query';
import {getCurrentUser} from '../Services/apiAuth';

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  console.log('useUser', user?.role);

  return {user, isLoading, isAuthenticated: user?.role === 'authenticated'};
}
