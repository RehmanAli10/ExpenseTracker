// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import React from 'react';
// import DropdownComponent from '../Components/DropdownComponent';
// import {clearAllTransaction} from '../Services/apiAuth';
// import {useUser} from '../Authentication/useUser';
// import HeaderComponent from '../Components/HeaderComponent';
// import {BackIcon} from '../Assets/Icons';
// import ForwardIcon from '../Assets/Icons/ForwardIcon';

// const SettingsScreen = ({currencyDropdownData, handleNavigateBack}) => {
//   const {user} = useUser();

//   async function handleClearallTransactions() {
//     clearAllTransaction(user.id);
//   }

//   return (
//     <View style={styles.container}>
//       <HeaderComponent
//         newIcon={
//           <TouchableOpacity onPress={handleNavigateBack}>
//             <BackIcon color={'white'} height={'8%'} width={'8%'} />
//           </TouchableOpacity>
//         }
//         headingText={'Settings'}
//       />

//       <TouchableOpacity
//         style={styles.clearAllContainer}
//         onPress={handleClearallTransactions}>
//         <Text style={styles.text}>Clear all transactions</Text>
//         <ForwardIcon height={25} width={25} color={'black'} />
//       </TouchableOpacity>

//       <DropdownComponent placeholder="Currency" data={currencyDropdownData} />
//       <DropdownComponent
//         placeholder="Date and Time Format"
//         data={currencyDropdownData}
//       />
//     </View>
//   );
// };
// export default SettingsScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   clearAllContainer: {
//     borderWidth: 2,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     padding: '3%',
//     marginTop: '3%',
//     borderRadius: 10,
//     marginBottom: '3%',
//   },
//   text: {
//     fontSize: 16,
//   },
// });

import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';
import DropdownComponent from '../Components/DropdownComponent';
import {clearAllTransaction} from '../Services/apiAuth';
import {useUser} from '../Authentication/useUser';
import HeaderComponent from '../Components/HeaderComponent';
import {BackIcon} from '../Assets/Icons';
import ForwardIcon from '../Assets/Icons/ForwardIcon';

const SettingsScreen = ({currencyDropdownData, handleNavigateBack}) => {
  const {user} = useUser();

  async function handleClearAllTransactions() {
    clearAllTransaction(user.id);
  }

  return (
    <View style={styles.container}>
      <HeaderComponent
        newIcon={
          <TouchableOpacity onPress={handleNavigateBack}>
            <BackIcon color="white" height={30} width={30} />
          </TouchableOpacity>
        }
        headingText="Settings"
      />

      <TouchableOpacity
        style={styles.clearAllContainer}
        onPress={handleClearAllTransactions}>
        <Text style={styles.text}>Clear All Transactions</Text>
        <ForwardIcon height={25} width={25} color="black" />
      </TouchableOpacity>

      <DropdownComponent placeholder="Currency" data={currencyDropdownData} />
      <DropdownComponent
        placeholder="Date and Time Format"
        data={currencyDropdownData}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  clearAllContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '3%',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
