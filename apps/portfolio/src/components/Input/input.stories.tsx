import { Input, InputProps } from "./input";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Input",
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: "E-mail",
    placeholder: "E-mail",
    error: "",
    type: "email",
  },
} as Meta<InputProps>;

export const Default: StoryObj = {};
