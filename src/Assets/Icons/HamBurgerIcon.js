import {TouchableOpacity} from 'react-native';
import {Svg, Path} from 'react-native-svg';

function HamBurgerIcon({height, width, color, handleClick}) {
  if (handleClick)
    return (
      <TouchableOpacity onPress={handleClick}>
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </Svg>
      </TouchableOpacity>
    );
  return (
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </Svg>
  );
}

export default HamBurgerIcon;

