import { PencilSimple, X } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useRef, useState } from "react";
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
      {!modalOpen && <EditInformationModal onClose={handleEditInfo} />}
    </section>
  );
};

type EditInformationModalProps = {
  onClose: () => void;
};

const EditInformationModal = ({ onClose }: EditInformationModalProps) => {
  return (
    <Modal.Overlay>
      <Modal.Root>
        <Modal.Portal>
          <Modal.Title label="Edit profile" />
          <Modal.Close />
          <Modal.Content>
            <p>oiiii</p>
          </Modal.Content>
        </Modal.Portal>
        <Modal.ButtonArea>
          <Button appearance="secondary" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button appearance="tertiary" size="md">
            Save
          </Button>
        </Modal.ButtonArea>
      </Modal.Root>
    </Modal.Overlay>
    // <div
    //   className={cx([
    //     "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    //     "bg-[rgba(0,0,0,0.3)] rounded-[0.625rem] w-full h-full flex flex-col justify-center z-50",
    //     "",
    //   ])}
    // >
    //   <Form.Root>
    //     <fieldset className="flex flex-row w-full">
    //       <h3 className="text-selago-950 text-[22px] font-bold leading-[43px] mr-auto">
    //         Edit profile
    //       </h3>
    //       <button onClick={onClose}>
    //         <X size={30} />
    //       </button>
    //     </fieldset>
    //     <Input.Input label="Full name" placeholder="Full name" />
    //     <Input.Input label="Team" placeholder="Team" />
    //   </Form.Root>
    //   <div className="flex flex-row gap-[20px] bg-selago-200">
    //     <Button appearance="secondary" size="md">
    //       Cancel
    //     </Button>
    //     <Button appearance="tertiary" size="md">
    //       Save
    //     </Button>
    //   </div>
    // </div>
  );
};
