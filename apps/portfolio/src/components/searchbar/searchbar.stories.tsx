import { Searchbar } from "~/components";
import { StoryObj } from "@storybook/react";
import { Select } from ".";

export default {
  title: "Components/Searchbar",
  tags: ["autodocs"],
  component: Searchbar.Root,
  argTypes: {
    onSearchResult: {
      description: "Callback function to handle search results",
    },
  },
};

export const Default: StoryObj = {
  args: {
    children: (
      <>
        <Searchbar.Input placeholder="Search projects" />
      </>
    ),
  },
};

export const WithSelect: StoryObj = {
  args: {
    children: (
      <>
        <Searchbar.Input placeholder="Search projects" />
        <Select.Field>
          <Select.Item>Option 1</Select.Item>
          <Select.Item>Option 2</Select.Item>
          <Select.Item>Option 3</Select.Item>
        </Select.Field>
      </>
    ),
  },
};
