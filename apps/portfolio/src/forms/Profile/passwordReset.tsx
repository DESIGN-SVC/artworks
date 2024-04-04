import { zodResolver } from "@hookform/resolvers/zod";
import { Check, WarningOctagon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "~/components";

export const PasswordReset = ({
  submitRef,
  onClose,
}: {
  submitRef: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
}) => {
  const formSchema: z.ZodSchema<{
    password: string;
    newPassword: string;
    confirmPassword: string;
  }> = z.object({
    password: z.string().min(1, "Could not be empty"),
    newPassword: z
      .string()
      .min(1, "Could not be empty")
      .regex(/.{6,}/, "At least 6 characters")
      .regex(/[A-Z]/, "At least 1 uppercase letter (A...Z)")
      .regex(/[a-z]/, "At least 1 lowercase letter (a...z)")
      .regex(/[0-9]/, "At least 1 number (0...9)"),
    confirmPassword: z
      .string()
      .min(1, "Could not be empty")
      .refine((data) => data === watch("newPassword"), {
        message: "Passwords do not match",
      }),
  });

  const newPasswordCriteria = {
    minLength: {
      regex: /.{6,}/,
      message: "At least 6 characters",
    },
    uppercase: {
      regex: /[A-Z]/,
      message: "At least 1 uppercase letter (A...Z)",
    },
    lowercase: {
      regex: /[a-z]/,
      message: "At least 1 lowercase letter (a...z)",
    },
    number: {
      regex: /[0-9]/,
      message: "At least 1 number (0...9)",
    },
  };

  type FormData = z.infer<typeof formSchema>;
  type NewPasswordCriteriaKeys = keyof typeof newPasswordCriteria;
  type NewPasswordCriteriaState = {
    [key in NewPasswordCriteriaKeys]: boolean;
  };

  const [newPasswordCriteriaState, setNewPasswordCriteriaState] =
    useState<NewPasswordCriteriaState>({
      minLength: false,
      uppercase: false,
      lowercase: false,
      number: false,
    });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const newPasswordValue = watch("newPassword");

  useEffect(() => {
    const newState: NewPasswordCriteriaState = {
      minLength: false,
      uppercase: false,
      lowercase: false,
      number: false,
    };

    for (const [key, { regex }] of Object.entries(newPasswordCriteria)) {
      newState[key as NewPasswordCriteriaKeys] = regex.test(newPasswordValue);
    }
    setNewPasswordCriteriaState(newState);
  }, [newPasswordValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    onClose();
    //Resto da lógica de submit
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input.Password
          label="Current password"
          placeholder="Current password"
          className="mb-5"
          {...register("password")}
          error={errors.password?.message}
        />
        <Input.Password
          label="New password"
          placeholder="New password"
          className="mb-5"
          {...register("newPassword")}
          error={errors.newPassword?.message}
        />
        <Input.Password
          label="Confirm password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <button className="hidden" type="submit" ref={submitRef} />
      </form>
      <h3 className="text-selago-900 font-bold">Password must contain</h3>
      <ul className="flex flex-col gap-[10px]">
        {Object.entries(newPasswordCriteria).map(([key, { message }]) => (
          <li key={key} className="flex items-center gap-[10px]">
            {newPasswordCriteriaState[key as NewPasswordCriteriaKeys] ? (
              <>
                <Check size={18} className="text-green-500" />
                <h5 className="text-green-500 line-through">{message}</h5>
              </>
            ) : (
              <>
                <WarningOctagon size={18} className="text-red-500" />
                <h5 className="text-red-500">{message}</h5>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
