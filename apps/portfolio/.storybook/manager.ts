import { themes } from "@storybook/theming";
import { addons } from "@storybook/manager-api";
addons.setConfig({
  theme: themes.dark,
  isFullscreen: true,
});
