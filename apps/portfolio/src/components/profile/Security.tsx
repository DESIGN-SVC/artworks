import { PencilSimple, X } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useState } from "react";
import { Button, Form, Input, Modal } from "~/components";
import { z } from "zod";

type SecurityProps = ComponentPropsWithRef<"section">;

export const Security = ({ ...props }: SecurityProps) => {
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
      <h3 className="text-selago-900 font-bold">Security</h3>
      <p
        className={cx([
          "font-[14px] text-selago-800",
          "leading-[24px] dark:text-selago-100",
          "w-full max-w-[260px] text-center",
          "lg:text-left lg:mr-auto",
        ])}
      >
        Edit your password.
      </p>

      <Button
        appearance="secondary"
        className="text-selago-300"
        onClick={handleEditInfo}
      >
        <PencilSimple size={24} />
        Edit password
      </Button>
      {modalOpen && <EditSecurityModal onClose={handleEditInfo} />}
    </section>
  );
};

type EditSecurityModalProps = {
  onClose: () => void;
};

const EditSecurityModal = ({ onClose }: EditSecurityModalProps) => {
  const [form, setForm] = useState({
    actualPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const passwordResetSchema = z.object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter"
      )
      .regex(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      )
      .regex(/^(?=.*[0-9])/, "Password must contain at least one number")
      .regex(
        /^(?=.*[!@#$%^&*])/,
        "Password must contain at least one special character"
      )
      .refine((value) => value.length >= 8, {
        message: "Password must be at least 8 characters long",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  });

  type PasswordReset = z.infer<typeof passwordResetSchema>;

  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root className="w-[468px]">
        <Modal.Portal>
          <Modal.Title label="Edit profile" />
          <Modal.Content>
            <form className="gap-[20px]">
              <Input.Password
                label="Atual password"
                placeholder="Atual password"
                value={form.actualPassword}
                onChange={handleFormChange}
              />
              <Input.Password
                label="New password"
                placeholder="New password"
                value={form.newPassword}
                onChange={handleFormChange}
              />
              <Input.Password
                label="Confirm password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleFormChange}
              />
            </form>
            <h3 className="text-selago-900 font-bold">Password must contain</h3>
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
