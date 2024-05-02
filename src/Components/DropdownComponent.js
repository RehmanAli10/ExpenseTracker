import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DropdownComponent = ({placeholder, data}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const dropdownWidth = wp('90%');

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          {width: dropdownWidth},
          isFocus && {borderColor: 'blue'},
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('5%'),
  },
  dropdown: {
    height: hp('6%'),
    borderWidth: 0.5,
    borderRadius: wp('3%'),
    paddingHorizontal: wp('3%'),
  },
  placeholderStyle: {
    fontSize: wp('4%'),
  },
  selectedTextStyle: {
    fontSize: wp('4%'),
  },
  inputSearchStyle: {
    height: hp('5%'),
    fontSize: wp('4%'),
  },
});
