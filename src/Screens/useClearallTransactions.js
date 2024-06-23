import {useQueryClient, useMutation} from '@tanstack/react-query';
import {useToast} from 'react-native-toast-notifications';

import {clearAllTransaction as clearAllTransactionApi} from '../Services/apiAuth';

export function useClearallTransaction() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {isLoading: isClearingallTransaction, mutate: clearAllTransaction} =
    useMutation({
      mutationFn: clearAllTransactionApi,

      onSuccess: () => {
        toast.show('All transaction deleted successfully ', {
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

  return {isClearingallTransaction, clearAllTransaction};
}
