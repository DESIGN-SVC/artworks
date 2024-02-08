import { Tag } from "~/components/";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Cast",
  component: Tag.Cast,
  tags: ["autodocs"],
  args: {
    personName: "Name",
    type: "normal",
  },
  argTypes: {
    personName: {
      control: {
        type: "text",
      },
    },
    type: {
      options: ["normal", "delete"],
      control: { type: "inline-radio", defaultValue: "normal" },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default: StoryObj = {};
export const WithX: StoryObj = {
  args: {
    type: "delete",
  },
};
