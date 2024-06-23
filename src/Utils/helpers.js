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

export function getTransactionDataByType(transactions, type) {
  const data = {};
  let cumulativeAmount = 0;

  for (const month in transactions) {
    const formattedMonth = month.length > 3 ? month.slice(0, 3) : month;
    const monthTransactions = transactions[month];

    const totalAmount = monthTransactions
      .filter(transaction => transaction.type === type)
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    if (totalAmount > 0) {
      cumulativeAmount += totalAmount;
      if (!data[formattedMonth]) {
        data[formattedMonth] = [];
      }
      data[formattedMonth].push(cumulativeAmount);
    }
  }

  return data;
}

export function formatCircularPiechartData(transact) {
  const data = [];

  for (let trans in transact) {
    transact[trans].map(function (currEle) {
      data.push({
        name: trans,
        amount: currEle.amount,
        description: currEle.description,
        color:
          currEle.type === 'income'
            ? '#32CD32'
            : currEle.type === 'expense'
            ? '#FF6347'
            : '#000000',
        legendFontColor: currEle.type === 'income' ? '#32CD32' : '#FF6347',
        legendFontSize: 15,
      });
    });
  }
  return data;
}
