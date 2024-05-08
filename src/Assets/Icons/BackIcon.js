import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

const BackIcon = ({height, width, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="48"
    fill={'white'}
    id="back-arrow">
    <Path d="m30.91 39-15-15 15-15 1.17 1.18L18.26 24l13.82 13.82Z"></Path>
  </Svg>
);

export default BackIcon;
