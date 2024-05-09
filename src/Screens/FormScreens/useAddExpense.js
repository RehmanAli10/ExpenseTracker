import {useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addTransaction} from '../../Services/apiTransactions';

export function useAddExpense() {
  const [isNotificationExpense, setIsNotificationExpense] = useState(false);
  const [message, setIsMessage] = useState('');

  const queryClient = useQueryClient();
  const {mutate: addExpense} = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      setIsNotificationExpense(true);
      setIsMessage('Added expense successfully');
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
    },

    onError: err => {
      setIsNotificationExpense(true);
      setIsMessage(err.message);
    },
  });

  return {
    addExpense,
    setIsNotificationExpense,
    isNotificationExpense,
    message,
    setIsMessage,
  };
}
