import { Select } from "~/components";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select.Root,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default: StoryObj = {
  args: {
    children: (
      <>
        <Select.Item>Option 1</Select.Item>
        <Select.Item>Option 2</Select.Item>
        <Select.Item>Option 3</Select.Item>
      </>
    ),
  },
};