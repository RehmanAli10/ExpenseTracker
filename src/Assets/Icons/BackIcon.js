import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = ({height, width, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height={height}
    width={width}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke={color}
    class="w-6 h-6">
    <Path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
    />
  </Svg>
);

export default BackIcon;
