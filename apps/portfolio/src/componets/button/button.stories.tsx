import { Button } from "./button";
import { StoryObj } from "@storybook/react";


export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "button",    
    onClick: () => console.log("clicked"),
  },
};

export const Default: StoryObj = {};
export const TEste1: StoryObj = {
  args: {
    children: "button",
    size: "sm",
  },
};
