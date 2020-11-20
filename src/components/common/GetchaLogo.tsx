import React from 'react';
import styled from 'styled-components';
import Logo from '../../static/img/Logo.png';

const LogoBlock = styled.a.attrs({ href: 'https://www.getcha.kr' })``;

const LogoImg = styled.img.attrs({
  src: Logo,
})`
  width: 84px;
  height: 30px;
  object-fit: cover;
`;

const GetchaLogo: React.FC = () => (
  <LogoBlock>
    <LogoImg />
  </LogoBlock>
);

export default GetchaLogo;
