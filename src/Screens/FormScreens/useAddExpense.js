import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addTransaction} from '../../Services/apiTransactions';
import {useToast} from 'react-native-toast-notifications';

export function useAddExpense() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {mutate: addExpense} = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      toast.show('Added expense successfully', {
        type: 'warning',
        placement: 'top',
        duration: 2000,
      });
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
    },

    onError: err => {
      toast.show(err.message, {
        type: 'danger',
        placement: 'top',
        duration: 2000,
      });
    },
  });

  return {
    addExpense,
  };
}
