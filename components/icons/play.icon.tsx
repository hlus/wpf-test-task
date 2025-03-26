import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const PlayIcon: React.FC<SvgProps> = (props) => (
  <Svg width={10} height={10} transform={[{ scale: 0.8 }]} fill="none" {...props}>
    <Path
      fill="#0F172A"
      fillRule="evenodd"
      d="M1.875 2.355c0-.595.637-.971 1.158-.685L7.84 4.315a.781.781 0 0 1 0 1.369L3.033 8.329a.781.781 0 0 1-1.158-.685v-5.29Z"
      clipRule="evenodd"
    />
  </Svg>
);
