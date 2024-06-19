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
    onError: err => {
      console.error('Error fetching user:', err);
    },
  });

  return {user, isLoading, isAuthenticated: user?.role === 'authenticated'};
}
