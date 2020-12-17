import React from 'react';
import styled from 'styled-components/native';
import palette from '../static/palette';

export interface GetchaButtonProps {
  /** Button Width */
  width?: number;
  /** Button Height */
  height?: number;
  /** Button Background Color */
  backgroundColor?: string;
  /** Button Text Color */
  color?: string;
  /** Button Text */
  text?: string;
  /** Button Display State */
  disabled?: boolean;
  /** Button Press Event */
  onPress?: () => void;
}

const GetchaButtonBlock = styled.TouchableOpacity<GetchaButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props): number | undefined => props.width}px;
  height: ${(props): number | undefined => props.height}px;
  color: ${(props): string | undefined => props.color};
  background-color: ${(props): string | undefined =>
    props.disabled ? palette.base.gray350 : props.backgroundColor};
  border-radius: 4px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.5px;
  color: ${palette.base.white};
`;

/**
 * 버튼 Component
 */

const GetchaButton = ({
  width = 360,
  height = 52,
  text = 'button text',
  color = palette.base.white,
  backgroundColor = palette.point.red_getcha,
  disabled = false,
  onPress = (): void => {},
}: GetchaButtonProps): JSX.Element => (
  <GetchaButtonBlock
    disabled={disabled}
    width={width}
    height={height}
    color={color}
    backgroundColor={backgroundColor}
    onPress={onPress}
  >
    <Text>{text}</Text>
  </GetchaButtonBlock>
);

export default GetchaButton;
