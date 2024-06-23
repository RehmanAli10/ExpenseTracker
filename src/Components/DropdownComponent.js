import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {updateCurrency} from '../Services/apiTransactions';
import {useUser} from '../Authentication/useUser';

const DropdownComponent = ({placeholder, data}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const {user} = useUser();

  useEffect(
    function () {
      if (value) {
        updateCurrency({currency: value, id: user?.id});
      }
    },
    [value],
  );

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
        itemTextStyle={styles.itemTextStyle}
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
    marginBottom: hp('2%'),
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
    color: 'black',
  },
  inputSearchStyle: {
    height: hp('5%'),
    fontSize: wp('4%'),
    color: 'black',
  },
  itemTextStyle: {
    color: 'black',
  },
});
