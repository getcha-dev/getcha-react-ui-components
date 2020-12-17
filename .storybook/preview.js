import React from 'react';
import GlobalStyles from '../src/static/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Intro'],
    },
  },
  /** hide control tab */
  controls: {
    expanded: false,
    hideNoControlsWarning: true,
    hidden: true,
  },
  /** hide docs tab */
  // previewTabs: {
  //   'storybook/docs/panel': {
  //     hidden: true,
  //   },
  // },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
