import {useQueryClient, useMutation} from '@tanstack/react-query';
import {useToast} from 'react-native-toast-notifications';

import {clearAllTransaction as clearAllTransactionApi} from '../Services/apiTransactions';

export function useClearallTransactions() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {isLoading: isClearingallTransaction, mutate: clearAllTransaction} =
    useMutation({
      mutationFn: clearAllTransactionApi,

      onSuccess: () => {
        toast.show('All transactions cleared successfully', {
          type: 'success',
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
          duration: 1000,
        });
      },
    });

  return {isClearingallTransaction, clearAllTransaction};
}
