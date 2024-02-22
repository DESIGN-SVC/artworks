import { Search } from "~/components";
import { StoryObj } from "@storybook/react";
import { Select } from "~/components";

export default {
  title: "Components/Search",
  tags: ["autodocs"],
  component: Search.Root,
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
        <Search.Input placeholder="Search projects" />
      </>
    ),
  },
};

export const WithSelect: StoryObj = {
  args: {
    children: (
      <>
        <Search.Input placeholder="Search projects" />
        <Select.Root>
          <Select.Item>Option 1</Select.Item>
          <Select.Item>Option 2</Select.Item>
          <Select.Item>Option 3</Select.Item>
        </Select.Root>
      </>
    ),
  },
};
