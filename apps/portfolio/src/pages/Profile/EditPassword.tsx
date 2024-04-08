import { PencilSimple, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Button, Modal } from "~/components";
import { ProfileForms } from "~/forms";
import { Card, Subtitle, Title } from "./Card";

export const EditPassword = () => {
  const [editPasswordModalOpen, setEditPasswordModalOpen] =
    useState<boolean>(false);

  return (
    <Card>
      <article className="flex flex-col flex-1 gap-[20px]">
        <Title label={"Security"} />
        <Subtitle label={"Edit your password."} />
      </article>
      <Button
        appearance="secondary"
        className="lg:text-nowrap lg:max-w-[150px]"
        onClick={() => setEditPasswordModalOpen(true)}
      >
        <PencilSimple size={24} />
        Edit password
      </Button>

      <EditPasswordModal
        open={editPasswordModalOpen}
        onOpenChange={setEditPasswordModalOpen}
      />
    </Card>
  );
};

type EditPasswordModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EditPasswordModal = ({ open, onOpenChange }: EditPasswordModalProps) => {
  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <div className="max-h-[80vh] overflow-y-auto">
          <Modal.Title>Edit password</Modal.Title>
          <Modal.Close>
            <X size={30} className="text-selago-950 dark:text-selago-50" />
          </Modal.Close>
          <ProfileForms.EditPassword />
        </div>
        <Modal.ButtonArea>
          <Button appearance="secondary" size="md">
            Cancel
          </Button>
          <Button
            appearance="tertiary"
            size="md"
            form="edit-password-form"
            type="submit"
          >
            Save
          </Button>
        </Modal.ButtonArea>
      </Modal.Content>
    </Modal.Root>
  );
};
