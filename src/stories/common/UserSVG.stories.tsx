import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { UserSVG, UserSVGProps } from '../../components/svg/common/UserSVG';
import palette from '../../static/palette';

export default {
  title: 'SVG/User',
  component: UserSVG,
  argTypes: {
    fill: { control: 'color' },
  },
} as Meta;

const Template: Story<UserSVGProps> = (args) => <UserSVG {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 28,
  height: 28,
  fill: palette.base.black,
};
