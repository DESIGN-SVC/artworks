import { Tag } from "~/components/";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Cast",
  component: Tag.Cast,
  tags: ["autodocs"],
  args: {
    personName: "Name",
    handleDelete: () => {},
  },
  argTypes: {
    personName: {
      control: {
        type: "text",
      },
    },
    deleting: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    handleDelete: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default: StoryObj = {};
export const WithX: StoryObj = {
  args: {
    id: "castWithX",
    deleting: true,
    handleDelete: () => {
      const component = document.getElementById("castWithX");
      if (component) {
        component.style.display = "none";
      }
    },
  },
};
