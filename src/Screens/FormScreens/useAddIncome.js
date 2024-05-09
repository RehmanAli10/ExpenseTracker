import {useState} from 'react';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addTransaction} from '../../Services/apiTransactions';

export function useAddIncome() {
  const queryClient = useQueryClient();

  const [isNotificationIncome, setIsNotificationIncome] = useState(false);
  const [message, setIsMessage] = useState('');

  const {mutate: addIncome} = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      setIsNotificationIncome(true);
      setIsMessage('Added income successfully');
      queryClient.invalidateQueries({
        queryKey: ['transactions'],
      });
    },

    onError: err => {
      setIsNotificationIncome(true);
      setIsMessage(err.message);
    },
  });

  return {
    addIncome,
    setIsNotificationIncome,
    isNotificationIncome,
    message,
    setIsMessage,
  };
}
