import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import { GetchaInput, GetchaInputWithButton, GetchaInputWithTimer } from '../native';

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
  const [error, setError] = useState<boolean | string>(false);
  const [success, setSuccess] = useState<boolean | string>(false);
  const onChangeText = useCallback((text) => setValue(text), [setValue]);
  const onBlur = useCallback(() => {
    if (value.length < 1) {
      setSuccess(false);
      setError('invalid input');
    } else {
      setSuccess('valid input');
      setError(false);
    }
  }, [value, setError, setSuccess]);
  const onPressButton = () => window.alert('onPressButton');

  return (
    <TabBlock>
      <ContentBlock>
        <GetchaInput editable={false} />
      </ContentBlock>
      <ContentBlock>
        <GetchaInput />
      </ContentBlock>
      <ContentBlock>
        <GetchaInputWithButton
          value={value}
          onChangeText={onChangeText}
          success={success}
          error={error}
          onBlur={onBlur}
          buttonActive={value.length > 0}
          onPressButton={onPressButton}
        />
      </ContentBlock>
      <ContentBlock>
        <GetchaInputWithTimer timer={180} />
      </ContentBlock>
    </TabBlock>
  );
};

export default SecondTab;
