import {useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addTransaction} from '../../Services/apiTransactions';
import {useToast} from 'react-native-toast-notifications';

export function useAddIncome() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {mutate: addIncome} = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      toast.show('Added income successfully', {
        type: 'success',
        placement: 'top',
        duration: 1000,
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

  return {
    addIncome,
  };
}
