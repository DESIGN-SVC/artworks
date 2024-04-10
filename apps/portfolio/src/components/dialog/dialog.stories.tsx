import { X } from "@phosphor-icons/react";
import * as Dialog from "./Dialog";
import { StoryObj } from "@storybook/react";
import { Button } from "../button/Button";

export default {
  title: "Components/Dialog",
  tags: ["autodocs"],
  component: Dialog.Root,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },

  },
  args: {
    open: true,
    children: (
      <>
        <Dialog.Content>
          <Dialog.Title>Dialog example</Dialog.Title>
          <Dialog.Close>
            <X size={30} className="text-selago-950 dark:text-selago-50" />
          </Dialog.Close>
          <p className="mx-8 mb-[60px]">It is a simple dialog example.</p>
          <Dialog.ButtonArea>
            <Dialog.Close asChild>
              <Button appearance="secondary" size="md">
                Cancel
              </Button>
            </Dialog.Close>
            <Button type="submit" appearance="tertiary" size="md">
              Save
            </Button>
          </Dialog.ButtonArea>
        </Dialog.Content>
      </>
    ),
  },
};

export const Default: StoryObj = {};
