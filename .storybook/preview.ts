import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f8f8f8'
        },
        {
          name: 'dark',
          value: '#121214'
        }
      ]
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
