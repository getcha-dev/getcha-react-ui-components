import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { GetchaInputWithButton } from '../../../../src/native';

export default {
  title: 'Native/ Input / InputWithButton',
  component: GetchaInputWithButton,
} as Meta;

export const Default: Story = () => {
  return <GetchaInputWithButton />;
};
