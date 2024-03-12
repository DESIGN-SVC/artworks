import { StoryObj } from "@storybook/react";
import { Router } from "react-router-dom";
import { Breadcrumb } from "~/components";

const navigator = {
  createHref: () => "",
  go: () => {},
  push: () => {},
  replace: () => {},
};

export default {
  title: "Components/Breadcrumb",
  tags: ["autodocs"],
  component: Breadcrumb,
  decorators: [
    (Story: React.ComponentType) => (
      <Router location={"/home"} navigator={navigator}>
        <Story />
      </Router>
    ),
  ],
  args: {
    pages: ["Home", "Audiovisual", "Create video"],
  },
  argTypes: {
    pages: {
      control: {
        type: "array",
      },
    },
    className: {
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
