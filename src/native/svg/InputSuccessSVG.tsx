import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

const SVGBlock = styled.View`
  align-items: center;
  justify-content: center;
`;

const InputSuccessSVG: React.FC<SvgProps> = ({
  width = 16,
  height = 17,
  fill = '#38C52F',
  ...rest
}) => (
  <SVGBlock>
    <Svg width={width} height={height} viewBox="0 0 16 17" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 13.3a4.8 4.8 0 100-9.6 4.8 4.8 0 000 9.6z"
        fill={fill}
        stroke={fill}
        strokeWidth={2}
      />
      <Path
        d="M10.8 7.06l-3.36 3.2L5.2 8.127"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </SVGBlock>
);

export default InputSuccessSVG;
