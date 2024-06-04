import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {signOut} from '../Services/apiAuth';

export function useLogout() {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const {mutate: logOut, isPending} = useMutation({
    mutationFn: signOut,

    onSuccess: () => {
      queryClient.removeQueries();
      navigation.navigate('Login');
    },
  });

  return {logOut, isPending};
}
