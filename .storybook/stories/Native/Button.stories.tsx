import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { boolean, color, number, text } from '@storybook/addon-knobs';

import GetchaButton from '../../../src/native/GetchaButton';
import palette from '../../../src/static/palette';

export default {
  title: 'Native/GetchaButton',
  component: GetchaButton,
} as Meta;

export const Default: Story = () => {
  /** 버튼 가로 길이 */
  const width = number('width', 360);
  const height = number('height', 52);
  const buttonText = text('text', 'Getcha');
  const disabled = boolean('diabled', false);
  const textColor = color('color', palette.base.white);
  const backgroundColor = color('backgroundColor', palette.point.red_getcha);
  const onPress = action('onPress');

  return (
    <GetchaButton
      width={width}
      height={height}
      text={buttonText}
      color={textColor}
      disabled={disabled}
      backgroundColor={backgroundColor}
      onPress={onPress}
    />
  );
};

// const ButtonTemplate: Story<GetchaButtonProps> = (args) => <GetchaButton {...args} />;
// export const Default = ButtonTemplate.bind({});
// Default.args = {
//   text: 'default',
//   disabled: false,
//   onPress: action('onPress'),
// };

export const Disabled = () => (
  <GetchaButton disabled={boolean('disable', true)} onPress={action('onPress')} />
);
