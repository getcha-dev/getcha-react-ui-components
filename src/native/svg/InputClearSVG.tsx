import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

const SVGBlock = styled.View`
  align-items: center;
  justify-content: center;
`;

const InputClearSVG: React.FC<SvgProps> = ({
  width = 20,
  height = 20,
  fill = '#181818',
  ...rest
}) => (
  <SVGBlock>
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none" {...rest}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 17a7 7 0 100-14 7 7 0 000 14z"
        fill={fill}
      />
      <Path
        d="M11.909 7.066a.8.8 0 011.198 1.056l-.067.075-4.95 4.95a.8.8 0 01-1.197-1.056l.066-.075 4.95-4.95z"
        fill="#fff"
      />
      <Path
        d="M6.96 8.197A.8.8 0 018.014 7l.076.067 4.95 4.95a.8.8 0 01-1.057 1.197l-.075-.066-4.95-4.95z"
        fill="#fff"
      />
    </Svg>
  </SVGBlock>
);

export default InputClearSVG;
