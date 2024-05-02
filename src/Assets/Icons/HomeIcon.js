import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ width, height, color }) => (
<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={height} width={width}>
  <Path  d="M0 0h24v24H0V0z"/>
  <Path fill={color} d="M12 3L2 12h3v8h6v-6h4v6h6v-8h3z"/>
</Svg>

);

export default HomeIcon;
       