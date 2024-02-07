import { X } from "@phosphor-icons/react";
import { Function } from "../Tag";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Function",
  component: Function,
  args: {
    children: (
      <>
        <span className="flex flex-col gap-[4px]">
          Name
          <br />
          <span className="text-[12px] text-violet-300">Function</span>
        </span>
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
    }
  },
};

export const Default: StoryObj = {};
export const WithX: StoryObj = {
  args: {
    children: (
      <>
        <h5 className="flex flex-col gap-[4px]">
          Name
          <br />
          <span className="text-[12px] text-selago-600">Function</span>
        </h5>
        <X size={16} />
      </>
    ),
  },
};
