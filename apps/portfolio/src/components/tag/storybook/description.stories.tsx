import { Tag } from "~/components/";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Description",
  component: Tag.Description,
  tags: ["autodocs"],
  args: {
    text: "Tag",
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
  },
};

export const Default: StoryObj = {};
