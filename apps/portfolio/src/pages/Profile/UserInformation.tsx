import { PencilSimple } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { Button, Modal } from "~/components";
import { ProfileForms } from "~/forms";
import { Card, Title } from "./Card";

type PersonalInformationProps = {
  fullName: string;
  email: string;
  team: string;
};

export const PersonalInformation = ({
  fullName,
  email,
  team,
}: PersonalInformationProps) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  return (
    <Card>
      <article className="flex flex-col gap-5 mr-auto w-full">
        <Title label={"Personal info"} />

        <ul className="w-full flex flex-col gap-5 lg:mr-auto lg:flex-row">
          <li className="flex flex-col flex-1">
            <InfoHeader label="Full name" />
            <InfoDetail info={fullName} />
          </li>

          <li className="flex flex-col flex-1">
            <InfoHeader label="Email" />
            <InfoDetail info={email} />
          </li>

          <li className="flex flex-col flex-1">
            <InfoHeader label="Team" />
            <InfoDetail info={team} />
          </li>
        </ul>
      </article>
      <Button
        appearance="secondary"
        className="text-selago-300 lg:max-w-[9.375rem]"
        onClick={() => setEditModalOpen(true)}
      >
        <PencilSimple size={24} />
        Edit info
      </Button>

      {editModalOpen && (
        <EditInformationModal onClose={() => setEditModalOpen(false)} />
      )}
    </Card>
  );
};

type EditInformationModalProps = {
  onClose: () => void;
};

const EditInformationModal = ({ onClose }: EditInformationModalProps) => {
  const submitRef = useRef<HTMLButtonElement>(null);
  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root>
        <Modal.Portal>
          <Modal.Title label="Edit profile" />
          <Modal.Content>
            <ProfileForms.UserInformation
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
        <Modal.Close onClick={onClose} />
      </Modal.Root>
    </Modal.Overlay>
  );
};

const InfoHeader = ({ label }: { label: string }) => (
  <h3 className="text-selago-800">{label}</h3>
);

const InfoDetail = ({ info }: { info: string }) => (
  <h4 className="font-semibold lg:text-lg text-selago-900  dark:text-white">
    {info}
  </h4>
);
