import styled from 'styled-components';

export interface SVGProps {
  width?: number;
  height?: number;
  darkMode?: boolean;
}

export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;
