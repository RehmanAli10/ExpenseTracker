import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useTransactions} from './TransactionScreen/useTransactions';

function CalendarScreen() {
  const [selected, setSelected] = useState('');
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const {transactions} = useTransactions();

  const transactionDates = [];
  for (const month in transactions) {
    transactions[month].forEach(transaction => {
      const date = transaction.time.split('T')[0];
      transactionDates.push(date);
    });
  }

  const markedDates = transactionDates.reduce((acc, date) => {
    acc[date] = {
      marked: true,
      dotColor: 'orange',
    };
    return acc;
  }, {});

  if (selected) {
    markedDates[selected] = {
      selected: true,
      selectedColor: 'blue',
      disableTouchEvent: true,
    };
  }

  const handleDayPress = day => {
    setSelected(day.dateString);

    const transactionsForSelectedDate = [];
    for (const month in transactions) {
      transactions[month].forEach(transaction => {
        const date = transaction.time.split('T')[0];
        if (date === day.dateString) {
          transactionsForSelectedDate.push(transaction);
        }
      });
    }
    setSelectedTransactions(transactionsForSelectedDate);
  };

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        style={{
          height: 350,
        }}
      />
      <View style={styles.transactionList}>
        <Text style={styles.title}>Transactions for {selected}:</Text>
        <FlatList
          data={selectedTransactions}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.transactionItem}>
              <Text>
                {item.description}: {item.amount}
              </Text>
              <Text>Type: {item.type}</Text>
              <Text>Time: {new Date(item.time).toLocaleString()}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({
  transactionList: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
