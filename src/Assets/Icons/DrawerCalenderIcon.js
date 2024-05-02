
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DrawerCalenderIcon = ({height, width, color}) => (
<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"   
height={height}
    width={width}>
  <Path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 18V8h12v10H6zm3-5h6v2H9v-2z"/>
  <Path d="M0 0h24v24H0z" fill={color}/>
</Svg>
);

export default DrawerCalenderIcon;