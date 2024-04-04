import { PencilSimple } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Button, Modal } from "~/components";
import { ProfileForms } from "~/forms";
import { Card, Subtitle, Title } from "./Card";

export const Security = () => {
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
      {editPasswordModalOpen && (
        <EditPasswordModal onClose={() => setEditPasswordModalOpen(false)} />
      )}
    </Card>
  );
};

const EditPasswordModal = ({ onClose }: { onClose: () => void }) => {
  const submitRef = useRef<HTMLButtonElement>(null);

  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root>
        <Modal.Portal className="relative max-h-[80vh] overflow-y-auto">
          <Modal.Title label="Edit password" />
          <Modal.Content>
            <ProfileForms.PasswordReset
              submitRef={submitRef}
              onClose={onClose}
            />
          </Modal.Content>
          <Modal.Close onClick={onClose} />
        </Modal.Portal>
        <Modal.ButtonArea>
          <Button appearance="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button
            appearance="tertiary"
            size="md"
            onClick={() => submitRef.current?.click()}
          >
            Save
          </Button>
        </Modal.ButtonArea>
      </Modal.Root>
    </Modal.Overlay>
  );
};
