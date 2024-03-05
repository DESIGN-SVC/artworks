import { StoryObj } from "@storybook/react";
import { Breadcrumb } from "~/components";

export default {
  title: "Components/Breadcrumb/Caret",
  tags: ["autodocs"],
  component: Breadcrumb.Caret,
  args: {
    label: "Home",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
    className: {
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
