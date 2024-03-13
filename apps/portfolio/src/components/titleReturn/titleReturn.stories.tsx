import { StoryObj } from "@storybook/react";
import { TitleReturn } from "~/components";
import { Router } from "react-router-dom";

const navigator = {
  createHref: () => "",
  go: () => {},
  push: () => {},
  replace: () => {},
};

export default {
  title: "Components/TitleReturn",
  component: TitleReturn,
  decorators: [
    (Story: React.ComponentType) => (
      <Router location={"/"} navigator={navigator}>
        <Story />
      </Router>
    ),
  ],
  args: {
    label: "Audiovisual",
  },
  tags: ["autodocs"],
  argTypes: {
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
