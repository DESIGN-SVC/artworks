import { zodResolver } from "@hookform/resolvers/zod";
import { Check, WarningOctagon } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input } from "~/components";
import { FormDialog } from "./FormDialog";
import { useTheme } from "~/hooks";

type FormEditPasswordProps = {
  open: boolean;
  onClose: (open: boolean) => void;
};

export const FormEditPassword = ({ onClose, open }: FormEditPasswordProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { confirmPassword, currentPassword, newPassword },
    },
    reset,
    watch,
  } = useForm<EditPasswordFields>({
    resolver: zodResolver(EditPasswordSchema),
  });
  const { theme } = useTheme();

  const onSubmit = handleSubmit(async () => {
    reset();
  });

  const passwordErrors = [
    {
      passwordChecked: watch("newPassword")?.length >= 6,
      title: "At least 6 characters",
    },
    {
      passwordChecked: watch("newPassword")
        ? /^(?=.*[a-z])/.test(watch("newPassword"))
        : false,
      title: "At least 1 uppercase letter (A...Z)",
    },
    {
      passwordChecked: /^(?=.*[A-Z])/.test(watch("newPassword")),
      title: "At least 1 lowercase letter (a...z)",
    },
    {
      passwordChecked: /^(?=.*[0-9])/.test(watch("newPassword")),
      title: "At least 1 number (0...9)",
    },
  ];

  return (
    <FormDialog.Root
      open={open}
      onOpenChange={(e) => {
        onClose(e);
        reset();
      }}
      onSubmit={onSubmit}
    >
      <FormDialog.Content title="Edit Password">
        <div className="space-y-5">
          <fieldset className="space-y-5">
            <Input.Password
              label="Current password"
              placeholder="Current password"
              {...register("currentPassword")}
              error={currentPassword?.message}
            />
            <Input.Password
              label="New password"
              placeholder="New password"
              {...register("newPassword")}
              error={newPassword?.message}
            />
            <Input.Password
              label="Confirm password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
              error={confirmPassword?.message}
            />
          </fieldset>
          <div className="space-y-5">
            <h5 className="text-selago-900 font-bold">Password must contain</h5>

            <ul>
              {passwordErrors.map((el, index) => (
                <PasswordContain key={index} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </FormDialog.Content>
      <FormDialog.Footer>
        <FormDialog.Close asChild>
          <Button
            appearance={theme === "dark" ? "ghost" : "secondary"}
            type="button"
          >
            Cancel
          </Button>
        </FormDialog.Close>
        <Button appearance="tertiary" onClick={onSubmit}>
          Save
        </Button>
      </FormDialog.Footer>
    </FormDialog.Root>
  );
};
type PasswordContainerProps = {
  passwordChecked: boolean;
} & ComponentPropsWithRef<"li">;
const PasswordContain = ({
  passwordChecked,
  title,
}: PasswordContainerProps) => (
  <li
    className={cx(["flex gap-2.5 items-center"], {
      "text-green-600": passwordChecked,
      "text-red-400": !passwordChecked,
    })}
  >
    {passwordChecked ? (
      <WarningOctagon size={18} weight="bold" />
    ) : (
      <Check size={18} weight="bold" />
    )}
    <p
      className={cx(
        [
          "relative",
          "before:w-0 before:h-[1px]",
          "before:top-1/2 before:left-0 before:absolute",
          "before:bg-green-600",
          "before:transition-all before:duration-500 before:ease-in-out",
        ],
        {
          "before:!w-full": passwordChecked,
        },
      )}
    >
      {title}
    </p>
  </li>
);

const EditPasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    newPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter",
      )
      .regex(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter",
      )
      .regex(/^(?=.*[0-9])/, "Password must contain at least one number")
      .refine((value) => value.length >= 6, {
        message: "Password must be at least 6 characters long",
      }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type EditPasswordFields = z.infer<typeof EditPasswordSchema>;
