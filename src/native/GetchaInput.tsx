/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
} from 'react-native';
import InputClearSVG from '../static/svg/input_clear.svg';
import InputSuccessSVG from '../static/svg/input_success.svg';
import InputWarningSVG from '../static/svg/input_warning.svg';
// import { InputClearSVG, InputSuccessSVG, InputWarningSVG } from '../static/svg';
import palette from '../static/palette';

export interface GetchaInputProps {
  /** Reference Variable */
  ref?: any;
  /** Active State */
  editable?: boolean;
  /** Input Error State */
  error?: boolean | string;
  /** Input Title Label */
  label?: string;
  /** Input pattern */
  pattern?: '[0-9]*';
  /** Input Placeholder */
  placeholder?: string;
  /** Input Type */
  type?: 'text' | 'number' | 'email' | 'password';
  /** Input Value */
  value?: string | undefined;
  /** Input Success State */
  success?: boolean | string;
  /** Display Clear Button State */
  isShowClearBtn?: boolean;
  /** Change Event Function */
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData> | string) => void;
  /** Blur Event Fucntion */
  onBlur?: () => void;
}

export const InputBlock = styled.View`
  position: relative;
  width: 100%;
`;

export const InputClearButtonBlock = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const Label = styled.Text`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.38px;
  color: ${palette.base.black};
  margin-bottom: 6px;
`;

export const Input = styled.TextInput<GetchaInputProps>`
  font-size: 14px;
  line-height: 20px;
  border-radius: 2px;
  border: solid 1px ${(props) => (props.error ? palette.point.red_getcha : palette.base.gray700)};
  padding: 10px 12px 12px;
  padding-right: ${(props) => (props.isShowClearBtn ? 30 : 12)}px;
  color: ${(props) => (props.editable ? palette.base.gray500 : palette.base.black)};

  &:focus {
    border: solid 1px ${(props) => (props.error ? palette.point.red_getcha : '#848484')};
  }
`;

export const MessageBlock = styled.View<GetchaInputProps>`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export interface MessageProps {
  type: 'error' | 'success';
}

export const Message = styled.Text<MessageProps>`
  color: ${(props) => (props.type === 'error' ? palette.point.red_getcha : '#38C52F')};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.33px;
  margin-left: 4px;
`;

const GetchaInput = ({
  ref = null,
  editable = true,
  isShowClearBtn = true,
  error = false,
  success = false,
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  value = '',
  onChange = () => {},
  onBlur = () => {},
}: GetchaInputProps): JSX.Element => {
  const [showClear, setShowClear] = useState(false);

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBlock>
        <Input
          ref={ref}
          editable={editable}
          error={error}
          type={type}
          placeholder={placeholder}
          selectionColor={palette.point.red_getcha}
          value={value}
          isShowClearBtn={isShowClearBtn}
          onBlur={() => {
            setShowClear(false);
            onBlur();
          }}
          onFocus={() => setShowClear(true)}
          onChange={onChange}
        />
        {isShowClearBtn && showClear && (
          <InputClearButtonBlock>
            <TouchableWithoutFeedback onPress={() => onChange('')}>
              <InputClearSVG />
            </TouchableWithoutFeedback>
          </InputClearButtonBlock>
        )}
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

export default GetchaInput;
