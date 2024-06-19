import {useQuery} from '@tanstack/react-query';
import {getTransactions} from '../../Services/apiTransactions';
import {groupTransactionsByMonthYear} from '../../Utils/helpers';

export function useTransactions() {
  const {
    data: transactions,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
  });

  let totalIncome = transactions
    ?.filter(currElem => currElem.type === 'income')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  let totalExpense = transactions
    ?.filter(currElem => currElem.type === 'expense')
    .reduce((acc, currElem) => acc + currElem.amount, 0);

  let totalBalance = totalIncome - totalExpense;

  // Grouped transactions by month and year
  const groupedTransactions = transactions
    ? groupTransactionsByMonthYear(transactions)
    : {};

  return {
    transactions: groupedTransactions,
    isLoading,
    error,
    totalIncome,
    totalExpense,
    totalBalance,
    refetch,
  };
}
