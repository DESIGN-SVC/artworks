import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input, PasswordValidationContainer } from "~/components";

export const EditPassword = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { password, newPassword, confirmPassword },
    },
  } = useForm<EditPasswordFields>({
    resolver: zodResolver(EditPasswordSchema),
  });

  const onSubmit = (data: EditPasswordFields) => {
    console.log(data);
    //Resto da lógica de submit
  };

  const [passwordCriteriaState, setPasswordCriteriaState] =
    useState<PasswordCriteria>({
      length: false,
      lowercase: false,
      uppercase: false,
      number: false,
    });

  const handleResetPassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPasswordCriteriaState({
        length: value.length >= 6,
        lowercase: /[a-z]/.test(value),
        uppercase: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
      });
    },
    []
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="edit-password-form"
        className="mx-8"
      >
        <Input.Password
          label="Current password"
          placeholder="Current password"
          className="mb-5"
          {...register("password")}
          error={password?.message}
        />
        <Input.Password
          label="New password"
          placeholder="New password"
          className="mb-5"
          {...register("newPassword", { onChange: handleResetPassword })}
          error={newPassword?.message}
        />
        <Input.Password
          label="Confirm password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
          error={confirmPassword?.message}
        />
      </form>
      <aside className="mx-8 mt-[20px] mb-[60px] space-y-5">
        <h3 className="text-selago-900 font-bold dark:text-selago-50">Password must contain</h3>
        <PasswordValidationContainer criteriaState={passwordCriteriaState} />
      </aside>
    </>
  );
};

const EditPasswordSchema = z
  .object({
    password: z.string().min(1, "This field has to be filled."),
    newPassword: z
      .string()
      .min(1, "This field has to be filled.")
      .regex(/.{6,}/, { message: "At least 6 characters" })
      .regex(/[A-Z]/, { message: "At least 1 uppercase letter (A...Z)" })
      .regex(/[a-z]/, { message: "At least 1 lowercase letter (a...z)" })
      .regex(/[0-9]/, { message: "At least 1 number (0...9)" }),
    confirmPassword: z
      .string()
      .min(1, { message: "This field has to be filled." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type EditPasswordFields = z.infer<typeof EditPasswordSchema>;

type PasswordCriteria = {
  length: boolean;
  lowercase: boolean;
  uppercase: boolean;
  number: boolean;
};
