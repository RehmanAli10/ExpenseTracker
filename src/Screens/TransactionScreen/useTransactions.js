import {useQuery} from '@tanstack/react-query';
import {getTransactions} from '../../Services/apiTransactions';
import {groupTransactionsByMonthYear} from '../../Utils/helpers';
import {useUser} from '../../Authentication/useUser';
import {useUpdatecurrency} from '../useUpdatecurrency';

export function useTransactions() {
  const {user} = useUser();

  const {
    data: transactions,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['transactions', 'currency'],
    queryFn: getTransactions,
  });

  let userSignedInTransactions = transactions?.filter(
    trans => trans.UserUID === user.id,
  );

  let currency = userSignedInTransactions?.[0]?.currency;

  let totalIncome =
    userSignedInTransactions
      ?.filter(currElem => currElem.type === 'income')
      .reduce((acc, currElem) => acc + currElem.amount, 0) || 0;

  let totalExpense =
    userSignedInTransactions
      ?.filter(currElem => currElem.type === 'expense')
      .reduce((acc, currElem) => acc + currElem.amount, 0) || 0;

  let totalBalance = totalIncome - totalExpense;

  // Grouped transactions by month and year
  const groupedTransactions = userSignedInTransactions
    ? groupTransactionsByMonthYear(userSignedInTransactions)
    : {};

  return {
    transactions: groupedTransactions,
    isLoading,
    error,
    totalIncome,
    totalExpense,
    totalBalance,
    refetch,
    currency,
  };
}
