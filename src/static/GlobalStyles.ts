import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;    
  }

  *, *:before, *:after {
    box-sizing: inherit;
  };

  a, a:active {
    text-decoration: none;
    color: ${palette.base.black}
  }
`;

export default GlobalStyles;
