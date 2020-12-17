import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { GetchaInput } from '../native';

const TabBlock = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 10px;
  align-items: center;
`;

const ContentBlock = styled.View`
  width: 100%;
  margin: 5px 0;
`;

const SecondTab: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const onChange = useCallback((text) => setValue(text), [setValue]);
  return (
    <TabBlock>
      <ContentBlock>
        <GetchaInput value={value} onChange={onChange} />
      </ContentBlock>
      <ContentBlock>
        <GetchaInput editable={false} />
      </ContentBlock>
    </TabBlock>
  );
};

export default SecondTab;
