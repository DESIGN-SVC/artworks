import { StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    asChild: {
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

export const Default: StoryObj = {
};
