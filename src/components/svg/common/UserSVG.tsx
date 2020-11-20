import React from 'react';
import styled from 'styled-components';
import palette from '../../../static/palette';
import SVGIcon, { SVGProps } from '../SVGIcon';

const SVG = styled(SVGIcon)``;

const UserSVG: React.FC<SVGProps> = ({ darkMode = false }) => (
  <SVG viewBox="0 0 28 28" width={28} height={28}>
    <path
      d="M21.9561 23H6.03702C5.69572 23 5.43217 22.71 5.47473 22.3815L5.69449 20.7004C6.22444 16.6469 9.78147 13.6083 13.9965 13.6083C18.2116 13.6083 21.7686 16.6469 22.2986 20.7004L22.5184 22.3815C22.5613 22.71 22.2974 23 21.9561 23Z"
      fill={darkMode ? palette.base.white : palette.base.black}
    />
    <path
      d="M13.9967 12.6586C16.1784 12.6586 17.947 10.9441 17.947 8.82929C17.947 6.71443 16.1784 5 13.9967 5C11.815 5 10.0464 6.71443 10.0464 8.82929C10.0464 10.9441 11.815 12.6586 13.9967 12.6586Z"
      fill={darkMode ? palette.base.white : palette.base.black}
    />
  </SVG>
);

export default UserSVG;
