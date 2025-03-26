import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const QuestionCircleIcon: React.FC<SvgProps> = (props) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      stroke="#0F172A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M5.586 4.013c.781-.684 2.047-.684 2.828 0 .781.683.781 1.791 0 2.474a2.001 2.001 0 0 1-.446.295C7.47 7.022 7 7.448 7 8v.5M13 7A6 6 0 1 1 1 7a6 6 0 0 1 12 0Zm-6 3.5h.005v.005H7V10.5Z"
    />
  </Svg>
);
