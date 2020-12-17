import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import GetchaInput from '../../../src/native/GetchaInput';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Native/GetchaInput',
  component: GetchaInput,
} as Meta;

export const Default: Story = () => {
  const editable = boolean('editable', true);
  const error = boolean('error', false);
  const label = text('label', undefined);
  // const type = text('text', 'text');
  const value = text('value', undefined);
  const success = boolean('success', false);
  const isShowClearBtn = boolean('isShowClearBtn', true);
  const onChange = action('onChange');
  const onBlur = action('onChange');

  return (
    <GetchaInput
      editable={editable}
      error={error}
      label={label}
      value={value}
      success={success}
      isShowClearBtn={isShowClearBtn}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
