import { StoryObj } from "@storybook/react";
import { MobileHeader } from "./MobileHeader";

export default {
  title: "Components/MobileHeader",
  component: MobileHeader,
  tags: ["autodocs"],
  args: {

  },
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

export const Default: StoryObj = {};
