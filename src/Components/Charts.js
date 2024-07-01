import React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

function Charts({transactions, color, rgba, currency}) {
  const labels = Object.keys(transactions);

  console.log('currency', currency);

  const dataPoints = Object.values(transactions);

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#f5f5f5',
    backgroundGradientTo: '#f5f5f5',
    color: (opacity = 1) => `rgba(${rgba}, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    groupSpacing: 20,
    decimalPlaces: 0,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: '',
    },
    fillShadowGradient: color,
    fillShadowGradientOpacity: 1,
  };

  const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,
  };

  const screenWidth = Dimensions.get('window').width - 32;
  const dynamicWidth = Math.max(screenWidth, data.labels.length * 50);

  return (
    <ScrollView horizontal>
      <View style={{width: dynamicWidth}}>
        <BarChart
          style={graphStyle}
          data={data}
          width={dynamicWidth}
          height={300}
          yAxisLabel={currency}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
        />
      </View>
    </ScrollView>
  );
}

export default Charts;
