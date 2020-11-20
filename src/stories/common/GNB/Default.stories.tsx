import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import {
  ArgsTable,
  Description,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';
import GNB, { GNBDataProps, GNBStyleProps } from '../../../components/common/GNB';

export default {
  title: 'Common/GNB',
  component: GNB,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>Getcha `GNB`</Description>
          <Subtitle />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
  argTypes: {
    darkMode: {
      description: '차량상세 페이지에서만 다크모드',
      control: 'boolean',
    },
    fixed: {
      description: 'GNB 상단 고정',
      defaultValue: true,
      control: 'boolean',
    },
    showTitle: {
      description: '페이지 타이틀 노출 여부',
      defaultValue: true,
    },
  },
} as Meta;

const GNBTemplate: Story<GNBStyleProps & GNBDataProps> = (args) => <GNB {...args} />;

export const Default = GNBTemplate.bind({});
Default.args = {
  darkMode: false,
  fixed: false,
  showTitle: true,
};

export const DarkMode = GNBTemplate.bind({});
DarkMode.args = {
  darkMode: true,
  fixed: false,
  showTitle: true,
};
