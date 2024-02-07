import { Search } from "../Tag";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Search",
  component: Search,
  args: {
    children: <>Example (2)</>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    current: {
      options: [true, false],
      control: { type: "inline-radio", defaultValue: "default" },
    },
  },
};

export const Default: StoryObj = {};
