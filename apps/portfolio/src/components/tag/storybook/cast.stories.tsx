import { Tag } from "~/components/";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Cast",
  component: Tag.Cast,
  tags: ["autodocs"],
  args: {
    personName: "Name",
    id: "cast",
    handleDelete: () => {
      const component = document.getElementById("cast");
      if (component) component.style.display = "none";
    },
  },
  argTypes: {
    personName: {
      control: {
        type: "text",
      },
    },
    deleting: {
      control: {
        type: "boolean",
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
