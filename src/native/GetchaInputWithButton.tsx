import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

import { InputClearSVG, InputSuccessSVG, InputWarningSVG } from './svg';
import { InputBlock, Input, Label, MessageBlock, Message, GetchaInputProps } from './GetchaInput';
import palette from '../static/palette';

export interface GetchaInputWithButtonProps extends GetchaInputProps {
  /** button active state */
  buttonActive?: boolean;
  /**
   * button custom color
   * - default: getcha.point.red_getcha
   */
  buttonColor?: string;
  /** button text */
  buttonText?: string;
  /** Press Event Function */
  onPressButton?: () => void;
}

export const InputAbsBlock = styled.View`
  position: absolute;
  align-items: center;
  flex-direction: row;
  top: 12px;
  right: 6px;
`;

export const InputAbsButton = styled.TouchableOpacity<GetchaInputWithButtonProps>`
  width: 84px;
  height: 30px;
  border-radius: 2px;
  margin-left: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.buttonActive ? palette.point.red_getcha : palette.base.gray350};
`;

export const InputAbsButtonText = styled.Text`
  color: ${palette.base.white};
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: -0.738px;
`;

/**
 * Input With Button
 */

const GetchaInputWithButton: React.FC<GetchaInputWithButtonProps> = ({
  buttonActive = true,
  buttonColor = palette.point.red_getcha,
  buttonText = 'button',
  width = '100%',
  height = 42,
  ref = null,
  editable = true,
  isShowClearBtn = true,
  error = false,
  success = false,
  label = 'Label',
  placeholder = 'Placeholder',
  type = 'text',
  value = '',
  onChangeText = () => {},
  onPressButton = () => {},
  onBlur = () => {},
  ...rest
}) => {
  const [showClear, setShowClear] = useState(false);

  return (
    <>
      {label && <Label error={error}>{label}</Label>}
      <InputBlock width={width}>
        <Input
          ref={ref}
          height={height}
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
          onChangeText={onChangeText}
          {...rest}
        />

        <InputAbsBlock>
          {isShowClearBtn && showClear && value.length > 0 && (
            <TouchableWithoutFeedback onPress={() => onChangeText('')}>
              <InputClearSVG width={20} height={20} />
            </TouchableWithoutFeedback>
          )}
          <InputAbsButton
            buttonActive={buttonActive}
            buttonColor={buttonColor}
            onPress={onPressButton}
            disabled={!buttonActive}
            activeOpacity={1}
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

export default GetchaInputWithButton;
