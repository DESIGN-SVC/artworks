import { Check } from "@phosphor-icons/react";
import { StoryObj } from "@storybook/react";
import { Toast } from "..";
import { WarningOctagon } from "@phosphor-icons/react/dist/ssr";

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    open: true,
    icon: <Check size={18} />,
    text: "Lorem ipsum dolor.",
    type: "successful",
    position: "middle",
    direction: "right",
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
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
    open: {
      table: {
        disable: true,
      },
    },
    type: {
      options: ["successful", "error"],
      control: {
        type: "inline-radio",
        defaultValue: "primary",
      },
    },
    position: {
      options: ["top", "middle", "bottom"],
      control: {
        type: "inline-radio",
        defaultValue: "bottom",
      },
    },
    direction: {
      options: ["left", "right"],
      control: {
        type: "inline-radio",
        defaultValue: "right",
      },
    },
  },
};

export const Default: StoryObj = {};
export const Successful: StoryObj = {
  args: {
    icon: <Check size={18} />,
    type: "successful",
  },
};
export const Error: StoryObj = {
  args: {
    icon: <WarningOctagon size={18} />,
    type: "error",
  },
};
