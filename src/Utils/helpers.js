import {formatISO} from 'date-fns';

export function formatFormDate(createdAt) {
  return createdAt.toLocaleString();
}

export function groupTransactionsByMonthYear(transactions) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return transactions.reduce((acc, transaction) => {
    const [year, month] = transaction?.time.split('-');
    const monthYear = `${months[Number(month) - 1]}, ${year}`;
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(transaction);
    return acc;
  }, {});
}

export function convertToTimestamptz(dateString) {
  const date = new Date(dateString);
  return formatISO(date, {representation: 'complete'});
}
