import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const CheckedIcon: React.FC<SvgProps> = (props) => (
  <Svg width={16} height={16} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="#323232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 12 1.5 1.5v0a.707.707 0 0 0 1 0v0L15 10"
    />
  </Svg>
);
