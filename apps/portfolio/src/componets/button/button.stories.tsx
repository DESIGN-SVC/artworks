import { PencilSimple } from "@phosphor-icons/react";
import { Button } from "./button";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: (
      <>
        <PencilSimple />
        <span>Button</span>
      </>
    ),
  },
};

export const Default: StoryObj = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
