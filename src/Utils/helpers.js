export function formattedDate(createdAt) {
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
  const [datePart, timePart] = createdAt.split(',');

  const [date, month, year] = datePart.split('/');

  const monthIndex = parseInt(month, 10) - 1;

  const formattedMonth = months[monthIndex];

  return {formatted: createdAt.toLocaleString(), month: formattedMonth, year};
}

export function formatFormDate(createdAt) {
  return createdAt.toLocaleString();
}
