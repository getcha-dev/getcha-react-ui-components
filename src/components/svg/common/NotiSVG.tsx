import React from 'react';
import styled from 'styled-components';
import palette from '../../../static/palette';
import SVGIcon, { SVGProps } from '../SVGIcon';

export interface NotiSVGProps {
  topFill?: string;
  bottomFill?: string;
}

const SVG = styled(SVGIcon)<SVGProps>``;

export const NotiSVG: React.FC<NotiSVGProps> = ({
  topFill = palette.base.black,
  bottomFill = palette.base.black,
}) => (
  <SVG>
    <path
      d="M14.0005 24.0958C15.281 24.0958 16.3189 23.0277 16.3189 21.71H11.6816C11.6816 23.0277 12.7199 24.0958 14.0005 24.0958Z"
      fill={bottomFill}
    />
    <path
      d="M19.7428 20.7121H21.4534C21.8737 20.7121 22.1363 20.2437 21.9258 19.8696L19.9627 16.3767C19.8187 16.1202 19.7428 15.8294 19.7428 15.5334V12.3518C19.7428 9.64187 17.9699 7.35798 15.5525 6.66086C15.5533 6.64072 15.554 6.62018 15.554 6.59964C15.554 5.71605 14.8582 5 13.9999 5C13.1417 5 12.4455 5.71605 12.4455 6.59924C12.4455 6.61978 12.4462 6.63992 12.447 6.66046C10.0296 7.35758 8.25672 9.64146 8.25672 12.3514V15.533C8.25672 15.829 8.1808 16.1202 8.03678 16.3763L6.07371 19.8692C5.86316 20.2437 6.12576 20.7117 6.54609 20.7117H8.25672H19.7428V20.7121Z"
      fill={topFill}
    />
  </SVG>
);