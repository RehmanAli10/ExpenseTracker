import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

function Charts({transactions}) {
  const data = {
    labels: Object.keys(transactions),
    datasets: [
      {
        data: Object.values(transactions),
        colors: [(opacity = 1) => `rgba(134, 65, 244, ${opacity})`],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#f5f5f5',
    backgroundGradientTo: '#f5f5f5',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.7,
    decimalPlaces: 0, // Show whole numbers on the chart
    style: {
      borderRadius: 16,
    },
  };

  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,
  };

  return (
    <View style={styles.container}>
      <BarChart
        style={graphStyle}
        data={data}
        width={Dimensions.get('window').width - 32} // Added more margin for padding
        height={300} // Increased height for better visibility
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Changed background color for better contrast
  },
});

export default Charts;
