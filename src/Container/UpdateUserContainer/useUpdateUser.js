import {useMutation, useQueryClient} from '@tanstack/react-query';
import {updateUser as updateUserApi} from '../../Services/apiAuth';
import {useToast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const navigation = useNavigation();

  const toast = useToast();

  const {mutate: updateUser, isPending} = useMutation({
    mutationFn: ({email, password}) => updateUserApi({email, password}),

    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user);
      navigation.navigate('Login', {replace: true});
    },

    onError: err => {
      toast.show('Provided email or password are incorrect', {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
    },
  });

  return {updateUser, isPending};
}
