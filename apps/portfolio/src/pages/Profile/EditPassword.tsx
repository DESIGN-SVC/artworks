import { Check, PencilSimple, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, Modal, Toast } from "~/components";
import { ProfileForms } from "~/forms";
import { Card, Subtitle, Title } from "./Card";

export const EditPassword = () => {
  const [editPasswordModalOpen, setEditPasswordModalOpen] =
    useState<boolean>(false);

  return (
    <Card>
      <article className="flex flex-col flex-1 gap-5">
        <Title label={"Security"} />
        <Subtitle label={"Edit your password."} />
      </article>
      <Button
        appearance="secondary"
        className="lg:max-w-fit"
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
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <div className="relative max-h-[80vh] overflow-y-auto">
          <Modal.Title>Edit password</Modal.Title>
          <Modal.Close>
            <X size={30} className="text-selago-950 dark:text-selago-50" />
          </Modal.Close>
          <ProfileForms.EditPassword
            setOpen={onOpenChange}
            setToast={setToastOpen}
          />
        </div>
        <Modal.ButtonArea>
          <Modal.Close asChild>
            <Button appearance="secondary" size="md">
              Cancel
            </Button>
          </Modal.Close>
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
      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        success={true}
        position="bottom"
        direction="right"
        icon={<Check size={18} />}
        label="Changes saved successfully"
        className="min-w-[22.25rem] py-3.5 px-2.5"
      />
    </Modal.Root>
  );
};
