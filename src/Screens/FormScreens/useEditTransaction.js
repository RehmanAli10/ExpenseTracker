import {useQueryClient, useMutation} from '@tanstack/react-query';
import {editTransaction as editTransactionApi} from '../../Services/apiTransactions';

export function useEditTransaction() {
  const queryClient = useQueryClient();

  const {isLoading: isEditing, mutate: editTransaction} = useMutation({
    mutationFn: editedData => editTransactionApi(editedData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
    },
  });
  return {isEditing, editTransaction};
}
