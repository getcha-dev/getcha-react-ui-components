import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { GetchaInputWithTimer } from '../../../../src/native';

export default {
  title: 'Native/ Input / InputWithTimer',
  component: GetchaInputWithTimer,
} as Meta;

export const Default: Story = () => {
  return <GetchaInputWithTimer />;
};
