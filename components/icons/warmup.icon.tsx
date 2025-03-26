import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const WarmupIcon: React.FC<SvgProps> = (props) => (
  <Svg width={12} height={14} fill="none" {...props}>
    <Path
      stroke="#010101"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="m10.665 4.927-3.348-.4m0 0-1.17-.139c-.535-.064-.802-.096-1.005.041-.203.138-.277.4-.425.926L4.27 6.936c-.257.912-.386 1.369-.144 1.645.24.276.702.202 1.626.054l.339-.054m1.225-4.054L6.092 8.581M10.665 13l-.304-2.313c-.169-1.286-.253-1.928-.702-2.267-.448-.34-1.079-.238-2.342-.036l-1.225.197m-1.427 1.752-.368.738a2 2 0 0 1-.894.894L1.332 13M7.665 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
);
