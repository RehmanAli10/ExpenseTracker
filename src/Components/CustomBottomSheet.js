import React from 'react';
import {View, Text} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheetComponent = ({title, titleTwo, amountOne, amountTwo}) => {
  return (
    <RBSheet
      ref={ref => (this.RBSheet = ref)}
      height={100}
      duration={250}
      closeOnDragDown={true}
      customStyles={{
        container: {
          justifyContent: 'space-evenly',
          alignItems: 'center',
        },
      }}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 18, color: 'darkgreen'}}>{title}</Text>
          <Text style={{fontSize: 18, color: 'black'}}>{amountOne}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 18, color: 'darkred'}}>{titleTwo}</Text>
          <Text style={{fontSize: 18, color: 'black'}}>{amountTwo}</Text>
        </View>
      </View>
    </RBSheet>
  );
};

export default BottomSheetComponent;
