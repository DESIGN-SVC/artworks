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
    success: true,
    icon: <Check size={18} />,
    text: "Lorem ipsum dolor.",
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
    success: {
      options: [true, false],
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
    text: {
      control: {
        type: "text",
      },
    },
  },
};

export const Successful: StoryObj = {
  args: {
    icon: <Check size={18} />,
    success: true,
  },
};
export const Error: StoryObj = {
  args: {
    icon: <WarningOctagon size={18} />,
    success: false,
  },
};
