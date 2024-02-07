import { X } from "@phosphor-icons/react";
import { Name } from "../Tag";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Name",
  component: Name,
  args: {
    children: <>Name</>,
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
export const WithX: StoryObj = {
  args: {
    children: (
      <>
        <h5>Name</h5>
        <X size={16} />
      </>
    ),
  },
};
