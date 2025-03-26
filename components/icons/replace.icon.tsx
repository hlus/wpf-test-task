import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ReplaceIcon: React.FC<SvgProps> = (props) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#010101"
      fillRule="evenodd"
      d="M10.562 1.791a.6.6 0 0 0 .031.848l1.68 1.56H5.403a.6.6 0 0 0 0 1.2h6.872l-1.68 1.56a.6.6 0 0 0 .816.88l2.8-2.6a.6.6 0 0 0 0-.88l-2.8-2.6a.6.6 0 0 0-.848.032Zm-5.12 6.4a.6.6 0 0 0-.849-.031l-2.8 2.6a.6.6 0 0 0 0 .88l2.8 2.6a.6.6 0 1 0 .817-.88L3.73 11.8h6.872a.6.6 0 0 0 0-1.2H3.729l1.68-1.56a.6.6 0 0 0 .032-.849Z"
      clipRule="evenodd"
    />
  </Svg>
);
