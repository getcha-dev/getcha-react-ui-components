/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInputProps, TouchableWithoutFeedback } from 'react-native';
import { InputClearSVG, InputSuccessSVG, InputWarningSVG } from './svg';
import palette from '../static/palette';

export interface GetchaInputProps extends TextInputProps {
  /** Reference Variable */
  inputRef?: any;
  /** width */
  width?: number | string;
  /** height */
  height?: number | string;
  /** Active State */
  editable?: boolean;
  /** Input Error State */
  error?: boolean | string;
  /** Input Title Label */
  label?: string | null;
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
  /**
   * Display Clear Button State
   * - extra: value.length > 0 & onFocus === true
   */
  isShowClearBtn?: boolean;
  /** Change Event Function */
  onChangeText?: (text: string) => void;
  /** Blur Event Fucntion */
  onBlur?: () => void;
}

export const InputBlock = styled.View<GetchaInputProps>`
  position: relative;
  width: ${(props) => (typeof props.width === 'number' ? `${props.width}px` : props.width)};
`;

export const InputClearButtonBlock = styled.View`
  position: absolute;
  top: 17px;
  right: 12px;
`;

export const Label = styled.Text<GetchaInputProps>`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.38px;
  color: ${(props) => (props.error ? palette.primary.red_getcha : palette.base.black)};
`;

export const Input = styled.TextInput<GetchaInputProps>`
  margin-top: 6px;
  height: ${(props) => (typeof props.height === 'number' ? `${props.height}px` : props.height)};
  font-size: 14px;
  line-height: 20px;
  border-radius: 2px;
  border: solid 1px ${(props) => (props.error ? palette.primary.red_getcha : palette.base.grey300)};
  padding: 10px 12px 12px;
  padding-right: ${(props) => (props.isShowClearBtn ? 30 : 12)}px;
  color: ${(props) => (props.editable ? palette.base.black : palette.base.grey500)};
  background-color: ${(props) =>
    props.editable ? palette.base.white : 'rgba(239, 239, 239, 0.3)'};

  &:focus {
    border: solid 1px ${(props) => (props.error ? palette.primary.red_getcha : '#848484')};
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
  color: ${(props) => (props.type === 'error' ? palette.primary.red_getcha : '#38C52F')};
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.33px;
  margin-left: 4px;
`;

/**
 * Default Input Component
 *
 * - cursor color only changed on react native app
 */

const GetchaInput = ({
  width = '100%',
  height = 42,
  inputRef = null,
  editable = true,
  isShowClearBtn = true,
  error = false,
  success = false,
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  value = '',
  onChangeText = () => {},
  onBlur = () => {},
  ...rest
}: GetchaInputProps): JSX.Element => {
  const [showClear, setShowClear] = useState(false);

  return (
    <>
      {label && <Label error={error}>{label}</Label>}
      <InputBlock width={width}>
        <Input
          ref={inputRef}
          height={height}
          editable={editable}
          error={error}
          type={type}
          placeholder={placeholder}
          selectionColor={palette.primary.red_getcha}
          value={value}
          isShowClearBtn={isShowClearBtn}
          onBlur={() => {
            setShowClear(false);
            onBlur();
          }}
          onFocus={() => setShowClear(true)}
          onChangeText={onChangeText}
          {...rest}
        />
        {isShowClearBtn && showClear && value.length > 0 && (
          <InputClearButtonBlock>
            <TouchableWithoutFeedback onPress={() => onChangeText('')}>
              <InputClearSVG width={20} height={20} />
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
