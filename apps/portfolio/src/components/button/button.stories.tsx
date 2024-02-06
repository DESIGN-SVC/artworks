import { PencilSimple } from "@phosphor-icons/react";

import { Meta, StoryObj } from "@storybook/react";
import { Button,ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <PencilSimple />
        <span>Button</span>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    appearance: {
      options: ["primary", "secondary", "tertiary", "ghost"],
      control: {
        type: "inline-radio",
        defaultValue: "primary",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
        defaultValue: "md",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj = {};
