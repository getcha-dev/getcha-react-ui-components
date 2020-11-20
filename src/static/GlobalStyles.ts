import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  html {    
    box-sizing: border-box;    
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css);
    font-family: 'Spoqa Han Sans' !important;
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
