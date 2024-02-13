import { House } from "@phosphor-icons/react";
import { StoryObj } from "@storybook/react";
import { SidebarLinkPage } from "~/components/sidebar";

export default {
  title: "Components/Sidebar/RedirectPage",
  component: SidebarLinkPage,
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
  },
};

export const Default: StoryObj = {};
