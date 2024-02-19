import { SearchBar } from "./SearchBar";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/SearchBar",
  tags: ["autodocs"],
  component: SearchBar,
  args: {
    onSearchResult: () => {},
  },
  argTypes: {
    onSearchResult: {
      description: "Callback function to handle search results",
    },
  },
};

export const Default: StoryObj = {};
