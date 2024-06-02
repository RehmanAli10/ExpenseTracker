import {useMutation} from '@tanstack/react-query';
import {signinUser} from '../Services/apiAuth';
import {useToast} from 'react-native-toast-notifications';

export function userLogin() {
  const toast = useToast();

  const {mutate: logIn, isPending} = useMutation({
    mutationFn: signinUser,

    onSuccess: () =>
      toast.show('Signed in successfully', {
        type: 'success',
        duration: 1000,
        placement: 'top',
      }),

    onError: err => toast.show(err.message),
  });

  return {logIn};
}
