import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

function SearchField({searchField, setSearchField}) {
  return (
    <View>
      <TextInput
        style={styles.textField}
        onChangeText={setSearchField}
        value={searchField}></TextInput>
    </View>
  );
}
export default SearchField;

const styles = StyleSheet.create({
  textField: {
    borderTopWidth: 2,
    borderTopColor: 'red',
  },
});
