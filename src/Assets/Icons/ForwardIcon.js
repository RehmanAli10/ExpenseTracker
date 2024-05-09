import {View, Text} from 'react-native';
import React from 'react';
import {Svg, Path, G} from 'react-native-svg';

function ForwardIcon({color, height, width}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      height={height}
      width={width}
      id="forward-arrow">
      <G>
        <Path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></Path>
      </G>
    </Svg>
  );
}

export default ForwardIcon;
