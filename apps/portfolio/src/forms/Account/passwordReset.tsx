import { zodResolver } from "@hookform/resolvers/zod";
import { cx } from "cva";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input, PasswordValidationContainer } from "~/components";
import { LogoArtworks, LogoConcentrix } from "~/icons";

export const PasswordReset = () => {
  //provisório
  const [validation, setValidation] = useState(false);
  const [_, setSearchParams] = useSearchParams();
  const [criteriaState, setCriteriaState] = useState<PasswordCriteria>({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
  });

  const {
    register,
    handleSubmit,
    formState: {
      errors: { password, confirmPassword },
    },
  } = useForm<PasswordResetFields>({
    resolver: zodResolver(PasswordResetSchema),
  });

  const onSubmit = handleSubmit(
    async (fields) => {
      setValidation((prev) => !prev);
      console.log(fields);
      setSearchParams((state: URLSearchParams) => {
        state.delete("password");
        state.set("finish", "true");
        return state;
      });
    },
    (error) => {
      console.log(error);
    }
  );

  const handleCreatePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setCriteriaState({
        length: value.length >= 6,
        lowercase: /[a-z]/.test(value),
        uppercase: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
      });
    },
    []
  );

  useEffect(() => {
    setSearchParams((state: URLSearchParams) => {
      state.set("password", "true");
      return state;
    });
  }, []);

  return (
    <>
      {!validation && (
        <aside className="w-full flex flex-col gap-16 xl:h-[30.625rem] xl:justify-between">
          <LogoArtworks className="text-white w-full max-w-48 xl:h-5" />
          <h2 className="text-white text-3xl font-medium -mb-24">
            Password must contain:
          </h2>
          <PasswordValidationContainer criteriaState={criteriaState} />
          <LogoConcentrix
            aria-description="Concentrix"
            className="w-full max-w-[10.63rem] max-xl:hidden h-7"
          />
        </aside>
      )}

      <Form.Root>
        {validation ? (
          <>
            <Form.Success
              title="Password reset"
              description="Your password has been successfully reset."
            />
            <p
              className={cx(
                "text-selago-700 text-center w-full duration-300 ease-out ",
                {
                  "!text-left mt-36": validation,
                }
              )}
            >
              Enter the platform now
              <Link
                to="/"
                className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
              >
                {" "}
                Login
              </Link>
            </p>
          </>
        ) : (
          <>
            <Form.Title>Password reset</Form.Title>
            <Form.SubTitle>Enter your new password</Form.SubTitle>
            <form onSubmit={onSubmit} className="space-y-5">
              <Input.Password
                label="Password"
                placeholder="Password"
                {...register("password", { onChange: handleCreatePassword })}
                error={password?.message}
              />
              <Input.Password
                label="Confirm password"
                placeholder="Confirm password"
                {...register("confirmPassword")}
                error={confirmPassword?.message}
              />
              <Button appearance="tertiary" size="lg">
                Continue
              </Button>
            </form>
          </>
        )}
      </Form.Root>
    </>
  );
};

const PasswordResetSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter"
      )
      .regex(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      )
      .regex(/^(?=.*[0-9])/, "Password must contain at least one number")
      .refine((value) => value.length >= 6, {
        message: "Password must be at least 6 characters long",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "This field has to be filled." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordResetFields = z.infer<typeof PasswordResetSchema>;
type PasswordCriteria = {
  length: boolean;
  lowercase: boolean;
  uppercase: boolean;
  number: boolean;
};