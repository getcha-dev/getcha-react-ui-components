import React, { useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import GetchaInput from '../../../../src/native/GetchaInput';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Native/ Input / InputDefault',
  component: GetchaInput,
  decorators: [withKnobs],
} as Meta;

export const Default: Story = () => {
  const [state, setState] = useState('');
  const editable = boolean('editable', true);
  const error = boolean('error', false);
  const label = text('label', undefined);
  // const type = text('text', 'text');
  const value = text('value', state);
  const success = boolean('success', false);
  const isShowClearBtn = boolean('isShowClearBtn', true);
  const onChangeText = useCallback((text) => setState(text), [setState]);
  const onBlur = action('onChange');

  return (
    <GetchaInput
      editable={editable}
      error={error}
      label={label}
      value={value}
      success={success}
      isShowClearBtn={isShowClearBtn}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

export const Disabled: Story = () => {
  return <GetchaInput editable={false} />;
};

export const Error: Story = () => <GetchaInput error="Error occurred" value="This is error case" />;

export const Success: Story = () => <GetchaInput success="Success" value="This is Success case" />;
