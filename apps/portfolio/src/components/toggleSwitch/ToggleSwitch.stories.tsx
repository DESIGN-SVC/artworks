import { ToggleSwitch, ToggleSwitchProps } from "./toggleSwitch";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/ToggleSwitch",
  tags: ["autodocs"],
  component: ToggleSwitch,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ToggleSwitchProps>;

export const Default: StoryObj = {};
