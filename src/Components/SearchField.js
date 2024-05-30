import {StyleSheet, TextInput, View, Animated} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

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
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingLeft: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textField: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: 'black',
    fontSize: 16,
  },
});
