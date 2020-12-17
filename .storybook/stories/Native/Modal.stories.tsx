import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import GetchaModal, { GetchaModalProps } from '../../../src/native/GetchaModal';

import { Text } from 'react-native';
import { action, withActions } from '@storybook/addon-actions';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

const LONG_TEXT = `본문시작\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문\n본문끝`;

export default {
  title: 'Native/GetchaModal',
  component: GetchaModal,
  decorators: [withActions, withKnobs],
} as Meta;

export const Default: Story = () => {
  const visible = boolean('visible', true);
  const modalTitle = text('modalTitle', 'modalTitle');
  const buttonTitle = text('buttonTitle', 'buttonTitle');
  const onPressButton = action('onPressButton');

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GetchaModal
        visible={visible}
        modalTitle={modalTitle}
        buttonTitle={buttonTitle}
        onPressButton={onPressButton}
      >
        <Text>content</Text>
      </GetchaModal>
    </div>
  );
};

export const LongContent: Story<GetchaModalProps> = () => {
  const visible = boolean('visible', false);
  const modalTitle = text('modalTitle', 'modalTitle');
  const buttonTitle = text('buttonTitle', 'buttonTitle');
  const onPressButton = action('onPressButton');

  return (
    <GetchaModal
      visible={visible}
      modalTitle={modalTitle}
      buttonTitle={buttonTitle}
      onPressButton={onPressButton}
    >
      <Text>{LONG_TEXT}</Text>
    </GetchaModal>
  );
};
