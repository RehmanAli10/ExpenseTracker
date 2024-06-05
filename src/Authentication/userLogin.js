import {useMutation, useQueryClient} from '@tanstack/react-query';
import {signinUser} from '../Services/apiAuth';
import {useToast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';

export function userLogin() {
  const queryClient = useQueryClient();

  const navigation = useNavigation();

  const toast = useToast();

  const {mutate: logIn, isPending} = useMutation({
    mutationFn: ({email, password}) => signinUser({email, password}),

    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user);
      navigation.navigate('Home', {replace: true});
    },

    onError: err => {
      toast.show('Provided email or password are incorrect', {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
    },
  });

  return {logIn, isPending};
}
