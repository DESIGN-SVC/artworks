import { StoryObj } from "@storybook/react";
import { MobileMenu } from "./MobileMenu";
import { Router } from "react-router-dom";

const navigator = {
  createHref: () => "",
  go: () => {},
  push: () => {},
  replace: () => {},
};

export default {
  title: "Components/MobileMenu",
  component: MobileMenu,
  decorators: [
    (Story: React.ComponentType) => (
      <Router location={"/?search=true"} navigator={navigator}>
        <Story />
      </Router>
    ),
  ],
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    asChild: {
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
