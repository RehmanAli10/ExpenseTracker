import {useQueryClient, useMutation} from '@tanstack/react-query';
import {useToast} from 'react-native-toast-notifications';

import {deleteTransaction as deleteTransactionApi} from '../../Services/apiTransactions';

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {isLoading: isDeleting, mutate: deleteTransaction} = useMutation({
    mutationFn: deleteTransactionApi,

    onSuccess: () => {
      toast.show('Transaction deleted successfully ', {
        type: 'success',
        placement: 'top',
        duration: 1000,
      });

      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
    },
    onError: err =>
      toast.show(err.message, {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      }),
  });

  return {isDeleting, deleteTransaction};
}
