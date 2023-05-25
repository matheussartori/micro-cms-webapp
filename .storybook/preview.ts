import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

import { globalStyles } from '../src/presentation/styles/global'
globalStyles()

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#121214'
        }
      ]
    },
    docs: {
      theme: themes.dark
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
