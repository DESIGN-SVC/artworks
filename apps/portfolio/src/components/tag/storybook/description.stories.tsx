import { Description } from "../Tag";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Description",
  component: Description,
  args: {
    children: <>Tag</>,
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
  },
};

export const Default: StoryObj = {};
