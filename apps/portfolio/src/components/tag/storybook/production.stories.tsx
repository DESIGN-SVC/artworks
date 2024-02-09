import { Tag } from "~/components/";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Tag/Production",
  component: Tag.Production,
  tags: ["autodocs"],
  args: {
    personName: "Name",
    personFunction: "Function",
    deleting: false,
    id: "production",
    handleDelete: () => {
      const component = document.getElementById("production");
      if (component) {
        component.style.display = "none";
      }
    },
  },
  argTypes: {
    personName: {
      control: {
        type: "text",
      },
    },
    personFunction: {
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
    id: "productionWithX",
    deleting: true,
    handleDelete: () => {
      const component = document.getElementById("productionWithX");
      if (component) {
        component.style.display = "none";
      }
    },
  },
};
