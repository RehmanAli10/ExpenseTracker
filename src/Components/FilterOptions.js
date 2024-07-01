// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';

// function FilterOptions({handleFilterChange, activeFilter}) {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.scrollView}>
//         <TouchableOpacity
//           style={[styles.btn, activeFilter === 'all' && styles.activeBtn]}
//           onPress={() => handleFilterChange('all')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'all' && styles.activeBtnText,
//             ]}>
//             All
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.btn, activeFilter === 'income' && styles.activeBtn]}
//           onPress={() => handleFilterChange('income')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'income' && styles.activeBtnText,
//             ]}>
//             Income
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.btn, activeFilter === 'expense' && styles.activeBtn]}
//           onPress={() => handleFilterChange('expense')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'expense' && styles.activeBtnText,
//             ]}>
//             Expense
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             activeFilter === 'highestIncome' && styles.activeBtn,
//           ]}
//           onPress={() => handleFilterChange('highestIncome')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'highestIncome' && styles.activeBtnText,
//             ]}>
//             Highest Income
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             activeFilter === 'highestExpense' && styles.activeBtn,
//           ]}
//           onPress={() => handleFilterChange('highestExpense')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'highestExpense' && styles.activeBtnText,
//             ]}>
//             Highest Expense
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             activeFilter === 'lowestIncome' && styles.activeBtn,
//           ]}
//           onPress={() => handleFilterChange('lowestIncome')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'lowestIncome' && styles.activeBtnText,
//             ]}>
//             Lowest Income
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             activeFilter === 'lowestExpense' && styles.activeBtn,
//           ]}
//           onPress={() => handleFilterChange('lowestExpense')}>
//           <Text
//             style={[
//               styles.btnText,
//               activeFilter === 'lowestExpense' && styles.activeBtnText,
//             ]}>
//             Lowest Expense
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// export default FilterOptions;

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: '2%',
//     backgroundColor: '#f8f9fa',
//   },
//   scrollView: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingHorizontal: '3%',
//   },
//   btn: {
//     backgroundColor: '#007bff',
//     paddingVertical: hp('1%'),
//     paddingHorizontal: wp('5%'),
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   btnText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   activeBtn: {
//     backgroundColor: 'black',
//     elevation: 3,
//   },
//   activeBtnText: {
//     color: 'white',
//   },
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function FilterOptions({handleFilterChange, activeFilter}) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <TouchableOpacity
          style={[styles.btn, activeFilter === 'all' && styles.activeBtn]}
          onPress={() => handleFilterChange('all')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'all' && styles.activeBtnText,
            ]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, activeFilter === 'income' && styles.activeBtn]}
          onPress={() => handleFilterChange('income')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'income' && styles.activeBtnText,
            ]}>
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, activeFilter === 'expense' && styles.activeBtn]}
          onPress={() => handleFilterChange('expense')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'expense' && styles.activeBtnText,
            ]}>
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            activeFilter === 'highestIncome' && styles.activeBtn,
          ]}
          onPress={() => handleFilterChange('highestIncome')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'highestIncome' && styles.activeBtnText,
            ]}>
            Highest Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            activeFilter === 'highestExpense' && styles.activeBtn,
          ]}
          onPress={() => handleFilterChange('highestExpense')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'highestExpense' && styles.activeBtnText,
            ]}>
            Highest Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            activeFilter === 'lowestIncome' && styles.activeBtn,
          ]}
          onPress={() => handleFilterChange('lowestIncome')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'lowestIncome' && styles.activeBtnText,
            ]}>
            Lowest Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            activeFilter === 'lowestExpense' && styles.activeBtn,
          ]}
          onPress={() => handleFilterChange('lowestExpense')}>
          <Text
            style={[
              styles.btnText,
              activeFilter === 'lowestExpense' && styles.activeBtnText,
            ]}>
            Lowest Expense
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default FilterOptions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp('2%'),
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp('3%'),
  },
  btn: {
    backgroundColor: '#007bff',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('1%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  activeBtn: {
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  activeBtnText: {
    color: '#fff',
  },
});
