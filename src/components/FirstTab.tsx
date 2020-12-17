import React from 'react';
import styled from 'styled-components/native';
import { GetchaButton } from '../native';

const TabBlock = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FirstTab: React.FC = () => {
  return (
    <TabBlock>
      <GetchaButton />
    </TabBlock>
  );
};

export default FirstTab;
