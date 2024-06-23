import {ScrollView, StyleSheet, View, Text, Dimensions} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';

const {width: screenWidth} = Dimensions.get('window');

function CircularProgress({transactions}) {
  const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.circularChartContainer}>
          <PieChart
            data={transactions}
            width={400}
            height={220}
            chartConfig={chartConfig}
            accessor="amount"
            backgroundColor="transparent"
            absolute
            hasLegend={false}
          />
        </View>

        <ScrollView style={styles.legendContainer}>
          {transactions.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, {backgroundColor: item.color}]}
              />
              <Text style={styles.legendText}>
                {item.name} - {item.amount}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularChartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 100,
  },
  legendContainer: {
    width: screenWidth * 0.8,
    marginLeft: 80,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#000',
  },
});

export default CircularProgress;
