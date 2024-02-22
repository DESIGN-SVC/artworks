import { House } from "@phosphor-icons/react";
import { StoryObj } from "@storybook/react";
import { Sidebar } from "~/components";

export default {
  title: "Components/Sidebar/Linkpage",
  component: Sidebar.Linkpage,
  tags: ["autodocs"],
  args: {
    icon: <House size={21} />,
    label: "Home",
    href: "#",
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
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default: StoryObj = {};
