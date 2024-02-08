import { Tag } from "~/components/";
import { Cards } from "@phosphor-icons/react";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Episode",
  component: Tag.Episode,
  tags: ["autodocs"],
  args: {
    icon: <Cards size={14} className="transform scale-y-[-1]" />,
    text: "4 episodes",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    icon: {
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
