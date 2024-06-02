import {useMutation} from '@tanstack/react-query';
import {signupUser} from '../Services/apiAuth';
import {useToast} from 'react-native-toast-notifications';

export function useSignUp() {
  const toast = useToast();

  const {mutate: signUp, isPending} = useMutation({
    mutationFn: signupUser,

    onSuccess: data =>
      toast.show('Signed up succesfully', {
        type: 'success',
        duration: 1000,
        placement: 'top',
      }),

    onError: err =>
      toast.show(err.message, {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      }),
  });

  return {signUp, isPending};
}
