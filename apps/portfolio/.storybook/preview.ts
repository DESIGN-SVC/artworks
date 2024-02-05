import { themes } from '@storybook/theming';
import type { Preview } from "@storybook/react";
import '../src/main.css'


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
