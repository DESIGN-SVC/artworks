import { Tag } from "~/components/";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Search",
  component: Tag.Search,
  tags: ["autodocs"],
  args: {
    current: false,
    text: "Example (2)",
  },
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
    current: {
      options: [true, false],
      control: { type: "inline-radio", defaultValue: "default" },
    },
  },
};

export const Default: StoryObj = {};
