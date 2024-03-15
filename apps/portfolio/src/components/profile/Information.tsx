import { PencilSimple } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useRef, useState } from "react";
import { Button } from "~/components";

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
    setModalOpen(true);
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
      {modalOpen && (
        <EditInformationModal
          onSubmit={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

type EditInformationModalProps = {
} & ComponentPropsWithRef<"form">;

const EditInformationModal = ({
  ...props
}: EditInformationModalProps) => {
  return (
    <form
    className="" 
    {...props}>
      <h3>Edit profile</h3>
      <fieldset>
        <label htmlFor="fullName">Name</label>
        <input type="text" id="fullName" />
      </fieldset>
      <fieldset>
        <label htmlFor="team">Team</label>
        <input type="text" id="team" />
      </fieldset>
    </form>
  );
};
