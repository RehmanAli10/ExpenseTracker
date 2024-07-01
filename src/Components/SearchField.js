// import {StyleSheet, TextInput, View, Animated, Image} from 'react-native';
// import React, {useState, useEffect, useRef} from 'react';

// function SearchField({searchField, handleSearchQuery}) {
//   const [isSearching, setIsSearching] = useState(false);
//   const rotateValue = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     if (isSearching) {
//       startRotation();
//     } else {
//       stopRotation();
//     }
//   }, [isSearching]);

//   const startRotation = () => {
//     Animated.loop(
//       Animated.timing(rotateValue, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//     ).start();
//   };

//   const stopRotation = () => {
//     rotateValue.setValue(0);
//   };

//   const handleInputChange = text => {
//     handleSearchQuery(text);
//     setIsSearching(text.length > 0);
//   };

//   const rotate = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.searchContainer}>
//       <Animated.Image
//         source={require('../Assets/Images/Expenselogo.png')}
//         style={[styles.logo, {transform: [{rotate}]}]}
//       />
//       <TextInput
//         style={styles.textField}
//         onChangeText={handleInputChange}
//         value={searchField}
//         placeholder="Search by amount or description"
//         placeholderTextColor="grey"
//       />
//     </View>
//   );
// }

// export default SearchField;

// const styles = StyleSheet.create({
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//     marginHorizontal: 20,
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   logo: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   textField: {
//     flex: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     color: '#333',
//     fontSize: 16,
//   },
// });

import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, TextInput, View, Animated, Image} from 'react-native';

function SearchField({searchField, handleSearchQuery}) {
  const [isSearching, setIsSearching] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isSearching) {
      startRotation();
    } else {
      stopRotation();
    }
  }, [isSearching]);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  };

  const stopRotation = () => {
    rotateValue.setValue(0);
  };

  const handleInputChange = text => {
    handleSearchQuery(text);
    setIsSearching(text.length > 0);
  };

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.searchContainer}>
      <Animated.Image
        source={require('../Assets/Images/Expenselogo.png')}
        style={[styles.logo, {transform: [{rotate}]}]}
      />
      <TextInput
        style={styles.textField}
        onChangeText={handleInputChange}
        value={searchField}
        placeholder="Search by amount or description"
        placeholderTextColor="grey"
      />
    </View>
  );
}

export default SearchField;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textField: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
