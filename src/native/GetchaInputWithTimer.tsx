import React from 'react';
import styled from 'styled-components/native';
import { InputSuccessSVG, InputWarningSVG } from './svg';
import { InputBlock, Input, Label, MessageBlock, Message } from './GetchaInput';
import {
  GetchaInputWithButtonProps,
  InputAbsBlock,
  InputAbsButton,
  InputAbsButtonText,
} from './GetchaInputWithButton';
import palette from '../static/palette';

export interface GetchaInputWithTimerProps extends GetchaInputWithButtonProps {
  /** timer state */
  timer?: number;
  /** display timer state */
  isShowTimer?: boolean;
}

const InputWithTimer = styled(Input)<GetchaInputWithTimerProps>`
  padding-right: ${(props) => (props.isShowTimer ? 128 : 108)}px;
`;

const Timer = styled.Text`
  font-size: 12px;
  color: ${palette.primary.red_getcha};
`;

/**
 * InputWithTimer
 *
 * - not support clear button
 */

const GetchaInputWithTimer: React.FC<GetchaInputWithTimerProps> = ({
  buttonActive = true,
  buttonColor = palette.primary.red_getcha,
  buttonText = 'button',
  width = '100%',
  height = 42,
  ref = null,
  editable = true,
  error = false,
  success = false,
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  value = '',
  timer = 180,
  isShowTimer = true,
  onChangeText = () => {},
  onPressButton = () => {},
  onBlur = () => {},
  ...rest
}) => {
  return (
    <>
      {label && <Label error={error}>{label}</Label>}
      <InputBlock width={width}>
        <InputWithTimer
          ref={ref}
          height={height}
          editable={editable}
          error={error}
          type={type}
          placeholder={placeholder}
          selectionColor={palette.primary.red_getcha}
          value={value}
          onBlur={onBlur}
          onChangeText={onChangeText}
          {...rest}
        />

        <InputAbsBlock>
          {isShowTimer && (
            <Timer>{`${timer / 60}: ${timer % 60 > 10 ? timer % 60 : `0${timer % 60}`}`}</Timer>
          )}
          <InputAbsButton
            buttonActive={buttonActive}
            buttonColor={buttonColor}
            onPress={onPressButton}
            disabled={!buttonActive}
          >
            <InputAbsButtonText>{buttonText}</InputAbsButtonText>
          </InputAbsButton>
        </InputAbsBlock>

        {error && (
          <MessageBlock>
            <InputWarningSVG />
            <Message type="error">{error}</Message>
          </MessageBlock>
        )}
        {success && (
          <MessageBlock>
            <InputSuccessSVG />
            <Message type="success">{success}</Message>
          </MessageBlock>
        )}
      </InputBlock>
    </>
  );
};

export default GetchaInputWithTimer;
