import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const DocumentIcon: React.FC<SvgProps> = (props) => (
  <Svg width={16} height={16} transform={[{ scale: 0.9 }]} fill="none" {...props}>
    <Path
      stroke="#010101"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M13 9.5V7.75a2.25 2.25 0 0 0-2.25-2.25h-1A.75.75 0 0 1 9 4.75v-1A2.25 2.25 0 0 0 6.75 1.5H5.5M6 11v.5m2-2v2M10 8v3.5m-3-10H3.75a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V7.5a6 6 0 0 0-6-6Z"
    />
  </Svg>
);
