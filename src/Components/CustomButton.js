import React from 'react';
import {View, TouchableOpacity, Text, ImageBackground} from 'react-native';
import {CustomButtonStyling} from '../Assets/Styles';

const CustomButton = ({
  buttonContainer,
  textStyle,
  onPress,
  buttonLabel,
  buttonColor,
  addIcon,
  addIconTwo,
  buttonWidth,
  buttonHeight,
  labelStyle,
  buttonMargin,
  backgroundImageSource,
  borderRadius,
  overlayColor,
}) => {
  const separatorWidth = addIcon && addIconTwo ? 40 : 0;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        CustomButtonStyling.buttonCreate,
        buttonContainer,
        {
          backgroundColor: buttonColor,
          width: buttonWidth,
          height: buttonHeight,
          marginBottom: buttonMargin,
        },
      ]}>
      <ImageBackground
        source={backgroundImageSource}
        style={{width: '100%', height: '100%'}}
        borderRadius={borderRadius}>
        <View
          style={[
            CustomButtonStyling.overlay,
            {
              backgroundColor: overlayColor,
              flex: 1,
              width: '100%',
              height: '100%',
              borderRadius: borderRadius,
            },
          ]}>
          <View style={CustomButtonStyling.iconContainer}>
            <View style={CustomButtonStyling.incomeIcon}>
              <View>{addIcon}</View>
            </View>
            <View
              style={[
                CustomButtonStyling.iconSeparator,
                {width: separatorWidth},
              ]}
            />
            <View>
              <View>{addIconTwo}</View>
            </View>
          </View>

          <Text style={[textStyle, labelStyle]}>{buttonLabel}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CustomButton;
