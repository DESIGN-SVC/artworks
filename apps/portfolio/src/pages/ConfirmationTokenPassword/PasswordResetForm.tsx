import { zodResolver } from "@hookform/resolvers/zod";
import { Check, WarningOctagon } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input, Loading } from "~/components";
import { useResetPasswordMutation } from "~/hooks";
import { LogoArtworks, LogoConcentrix } from "~/icons";

interface PasswordResetForm {
  email: string;
}

export const PasswordResetForm = ({ email }: PasswordResetForm) => {
  const {
    mutate: resetPassword,
    isSuccess,
    isError,
    isPending,
  } = useResetPasswordMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { confirmPassword, newPassword },
    },
    watch,
  } = useForm<ResetPasswordFields>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = handleSubmit(async ({ newPassword }) => {
    resetPassword({ password: newPassword, email });
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

  if (isPending) return <Loading />;

  return (
    <div className={cx("flex-1 w-full flex xl:items-center bg-hero-dark")}>
      <section
        className={cx([
          "w-full max-w-md mx-auto py-12",
          "flex flex-col gap-16",
          "xl:container xl:flex-row xl:items-center xl:min-h-[30.625rem] xl:m-auto",
        ])}
      >
        <div className="w-full flex flex-col gap-16 xl:h-[30.625rem] xl:justify-between">
          <LogoArtworks className="text-white w-full max-w-48 xl:h-5" />
          <div className="space-y-8 max-xl:hidden">
            <h3 className="text-xl text-white font-medium">
              Password must contain:
            </h3>
            <ul className="space-y-4">
              {passwordErrors.map((el, index) => (
                <PasswordContain key={index} {...el} />
              ))}
            </ul>
          </div>
          <LogoConcentrix
            aria-description="Concentrix"
            className="w-full max-w-64 max-xl:hidden h-5 xl:max-w-36 xl:h-6"
          />
        </div>
        <div className="space-y-8 xl:hidden">
          <h3 className="text-xl text-white font-medium">
            Password must contain:
          </h3>
          <ul className="space-y-4">
            {passwordErrors.map((el, index) => (
              <PasswordContain key={index} {...el} />
            ))}
          </ul>
        </div>

        <Form.Root>
          {!isSuccess && !isError && (
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="space-y-1">
                <Form.Title>Password reset</Form.Title>
                <Form.SubTitle>Enter your new password</Form.SubTitle>
              </div>
              <fieldset className="space-y-5">
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
              <Button appearance="tertiary">Continue</Button>
            </form>
          )}
          {isSuccess && (
            <>
              <Form.Success
                title="Password changed"
                description="You can now login using your new password"
              />
              <Button
                appearance={"tertiary"}
                onClick={() =>
                  navigate("/", {
                    replace: true,
                  })
                }
              >
                Login
              </Button>
            </>
          )}
          {isError && (
            <>
              <Form.Error description="Something went wrong" title="Error" />
              <Button
                onClick={() =>
                  navigate("/password/reset", {
                    replace: true,
                  })
                }
              >
                request again
              </Button>
            </>
          )}
        </Form.Root>
        <LogoConcentrix
          aria-description="Logo Concentrix"
          className="w-full max-w-64 mx-auto xl:hidden"
        />
      </section>
    </div>
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
      "text-green-200": passwordChecked,
      "text-red-400": !passwordChecked,
    })}
  >
    {passwordChecked ? (
      <WarningOctagon size={18} weight="bold" className="text-green-500" />
    ) : (
      <Check size={18} weight="bold" />
    )}
    <p
      className={cx(
        [
          "relative",
          "before:w-0 before:h-[1px]",
          "before:top-1/2 before:left-0 before:absolute",
          "before:bg-green-200",
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

const ResetPasswordSchema = z
  .object({
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

export type ResetPasswordFields = z.infer<typeof ResetPasswordSchema>;
