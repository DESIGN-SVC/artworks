import { Cards } from "@phosphor-icons/react";
import { Episode } from "../Tag";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Episode",
  component: Episode,
  args: {
    children: (
      <>
        <Cards size={14} className="transform scale-y-[-1]" />
        <span>4 episodes</span>
      </>
    ),
  },
  argTypes: {
    children: {
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
