import { Check, PencilSimple, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, Modal, Toast } from "~/components";
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
    <>
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
      </Card>

      <EditInformationModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
      />
    </>
  );
};

type EditInformationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EditInformationModal = ({
  open,
  onOpenChange,
}: EditInformationModalProps) => {
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  return (
    <>
      <Modal.Root open={open} onOpenChange={onOpenChange}>
        <Modal.Content>
          <Modal.Title>Edit profile</Modal.Title>
          <Modal.Close>
            <X size={30} className="text-selago-950 dark:text-selago-50" />
          </Modal.Close>
          <ProfileForms.UserInformation
            setOpen={onOpenChange}
            setToast={setToastOpen}
          />
          <Modal.ButtonArea>
            <Modal.Close asChild>
              <Button appearance="secondary" size="md">
                Cancel
              </Button>
            </Modal.Close>
            <Button
              type="submit"
              appearance="tertiary"
              size="md"
              form="user-information-form"
            >
              Save
            </Button>
          </Modal.ButtonArea>
        </Modal.Content>
      </Modal.Root>
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
    </>
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
