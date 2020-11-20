import React from 'react';
import styled from 'styled-components';
import palette from '../../../static/palette';
import SVGIcon, { SVGProps } from '../SVGIcon';

const SVG = styled(SVGIcon)``;

const SearchSVG: React.FC<SVGProps> = ({ darkMode = false }) => (
  <SVG viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle
      cx="11"
      cy="11"
      r="5"
      stroke={darkMode ? palette.base.white : palette.base.black}
      strokeWidth="2"
    />
    <path
      d="M15 15L19.5 19.5"
      stroke={darkMode ? palette.base.white : palette.base.black}
      strokeWidth="2"
    />
  </SVG>
);

export default SearchSVG;
