import { PencilSimple, X } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useState } from "react";
import { Button, Form, Input, Modal } from "~/components";

type InformationProps = {
  fullName: string;
  email: string;
  team: string;
} & ComponentPropsWithRef<"section">;

export const Information = ({
  fullName,
  email,
  team,
  ...props
}: InformationProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleEditInfo = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section
      className={cx([
        "flex flex-col gap-5 w-full",
        "rounded-[0.625rem] p-[20px] bg-white",
        "dark:bg-violet-900 text-selago-800",
      ])}
      {...props}
    >
      <h3 className="text-selago-900 font-bold">Pesonal info</h3>

      <h4 className="flex flex-col">
        <span>Full name</span>
        <span className="text-selago-900 font-semibold">{fullName}</span>
      </h4>

      <h4 className="flex flex-col">
        <span>Email</span>
        <span className="text-selago-900 font-semibold">{email}</span>
      </h4>

      <h4 className="flex flex-col">
        <span>Team</span>
        <span className="text-selago-900 font-semibold">{team}</span>
      </h4>
      <Button
        appearance="secondary"
        className="text-selago-300"
        onClick={handleEditInfo}
      >
        <PencilSimple size={24} />
        Edit info
      </Button>
      {modalOpen && <EditInformationModal onClose={handleEditInfo} />}
    </section>
  );
};

type EditInformationModalProps = {
  onClose: () => void;
};

const EditInformationModal = ({ onClose }: EditInformationModalProps) => {
  const [form, setForm] = useState({
    name: "",
    team: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root className="w-[468px]">
        <Modal.Portal>
          <Modal.Title label="Edit profile" />
          <Modal.Content>
            <form className="gap-[20px]">
              <Input.Input
                label="Name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleFormChange}
              />
              <Input.Input
                label="Team"
                type="text"
                placeholder="Team"
                value={form.team}
                onChange={handleFormChange}
              />
            </form>
          </Modal.Content>
        </Modal.Portal>
        <Modal.ButtonArea>
          <Button appearance="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button appearance="tertiary" size="md" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.ButtonArea>
        <Modal.Close onClick={onClose} />
      </Modal.Root>
    </Modal.Overlay>
  );
};
