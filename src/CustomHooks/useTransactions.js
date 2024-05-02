import {useQuery} from '@tanstack/react-query';
import {getData} from '../Services/apiData';

export function useTransactions() {
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['transactions'],
    queryFn: getData,
  });

  return {transactions, isLoading, error};
}
