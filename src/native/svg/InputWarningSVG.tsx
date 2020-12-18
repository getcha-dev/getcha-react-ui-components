import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

const SVGBlock = styled.View`
  align-items: center;
  justify-content: center;
`;

const InputWarning: React.FC<SvgProps> = ({
  width = 16,
  height = 17,
  fill = '#FE3D04',
  ...rest
}) => (
  <SVGBlock>
    <Svg width={width} height={height} viewBox="0 0 16 17" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.276 3.83c.773-1.314 2.675-1.314 3.448 0l4.503 7.656c.784 1.333-.177 3.014-1.724 3.014H3.497c-1.547 0-2.508-1.68-1.724-3.014l4.503-7.655z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.875 5.895A.869.869 0 008 5.14c-.486 0-.88.38-.88.847v4.002l.005.093a.869.869 0 00.875.754c.486 0 .88-.379.88-.847V5.987l-.005-.092zm0 6.59a.88.88 0 00-1.755.095l.005.096a.88.88 0 001.755-.096l-.005-.096z"
        fill="#fff"
      />
    </Svg>
  </SVGBlock>
);

export default InputWarning;
