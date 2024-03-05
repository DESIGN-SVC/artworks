import { StoryObj } from "@storybook/react";
import { Breadcrumb } from "~/components";

export default {
  title: "Components/Breadcrumb/Arrow",
  tags: ["autodocs"],
  component: Breadcrumb.Arrow,
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
      options: ["sm"],
      control: { type: "inline-radio" },
    },
    current: {
      control: {
        type: "boolean",
      },
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
