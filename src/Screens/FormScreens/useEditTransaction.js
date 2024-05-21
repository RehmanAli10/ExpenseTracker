import {useQueryClient, useMutation} from '@tanstack/react-query';
import {useToast} from 'react-native-toast-notifications';
import {useNavigation} from '@react-navigation/native';

import {editTransaction as editTransactionApi} from '../../Services/apiTransactions';

export function useEditTransaction() {
  const navigation = useNavigation();

  const queryClient = useQueryClient();

  const toast = useToast();

  const {isLoading: isEditing, mutate: editTransaction} = useMutation({
    mutationFn: editedData => editTransactionApi(editedData),
    onSuccess: () => {
      toast.show('Edited transaction successfully', {
        type: 'success',
        placement: 'top',
        duration: 2000,
      });
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
      navigation.goBack();
    },

    onError: err => {
      toast.show(err.message, {
        type: 'danger',
        placement: 'top',
        duration: 2000,
      });
    },
  });
  return {isEditing, editTransaction};
}
