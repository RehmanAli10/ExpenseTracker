import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';

function CircularProgress({transactions}) {
  return (
    <ScrollView horizontal>
      <PieChart data={transactions} height={220} />
    </ScrollView>
  );
}

export default CircularProgress;
