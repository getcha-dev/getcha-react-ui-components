import React from 'react';
import styled from 'styled-components/native';
import { InputClearSVG, InputSuccessSVG, InputWarningSVG } from '../native/svg';

const TabBlock = styled.View`
  flex: 1;
  margin-top: 50px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const RowBlock = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
`;

const SVGBlock = styled.View`
  margin: 0 5px;
`;

const SVGIconsTab: React.FC = () => {
  return (
    <TabBlock>
      <RowBlock>
        <SVGBlock>
          <InputWarningSVG />
        </SVGBlock>
        <SVGBlock>
          <InputClearSVG width={16} height={16} />
        </SVGBlock>
        <SVGBlock>
          <InputSuccessSVG width={16} height={16} />
        </SVGBlock>
      </RowBlock>
    </TabBlock>
  );
};

export default SVGIconsTab;
