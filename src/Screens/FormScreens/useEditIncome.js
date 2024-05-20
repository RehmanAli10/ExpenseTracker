import {useQueryClient, useMutation} from '@tanstack/react-query';
import {editTransaction as editTransactionApi} from '../../Services/apiTransactions';

export function useEditTransact() {
  const queryClient = useQueryClient();

  const {isLoading: isEditing, mutate: editTransaction} = useMutation({
    mutationFn: () => editTransactionApi(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
    },
  });
  return {isEditing, editTransaction};
}
