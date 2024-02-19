import { zodResolver } from "@hookform/resolvers/zod";
import { cx } from "cva";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input } from "~/components";

type Pathname = "personal-info" | "password" | "finish";

export const SignUp = () => {
  const [currentStep, setCurrentStep] = useState<Pathname>("personal-info");

  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, email, team, confirmPassword, password },
    },
    clearErrors,
  } = useForm<SignUpFields>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = handleSubmit(
    async (fields) => {
      console.log(fields);
      setCurrentStep("finish");
    },
    (error) => {
      if (
        !error.email &&
        !error.name &&
        !error.team &&
        currentStep === "personal-info"
      ) {
        setCurrentStep("password");
        clearErrors(["password", "confirmPassword"]);
      }
    },
  );

  return (
    <Form.Root>
      {currentStep !== "finish" ? (
        <>
          <Form.Title>Register</Form.Title>
          <nav className="flex gap-10">
            <Steps
              number={1}
              title="Personal information"
              current={currentStep === "personal-info"}
            />
            <Steps
              number={2}
              title="Password"
              current={currentStep === "password"}
            />
          </nav>
          <form onSubmit={onSubmit} className="space-y-5">
            {currentStep === "personal-info" && (
              <>
                <Input.Input
                  label="Name"
                  placeholder="Name"
                  type="text"
                  {...register("name")}
                  error={name?.message}
                />
                <Input.Input
                  label="E-mail"
                  placeholder="E-mail"
                  type="email"
                  {...register("email")}
                  error={email?.message}
                />
                <Input.Input
                  label="Team"
                  placeholder="Team"
                  type="text"
                  {...register("team")}
                  error={team?.message}
                />
              </>
            )}

            <Input.Password
              label="Password"
              placeholder="Password"
              {...register("password")}
              error={password?.message}
              className={cx("", {
                hidden: currentStep !== "password",
              })}
            />
            <Input.Password
              label="Confirm password"
              placeholder="Confirm password"
              {...register("confirmPassword")}
              error={confirmPassword?.message}
              className={cx("", {
                hidden: currentStep !== "password",
              })}
            />

            <Button appearance="tertiary" size="lg">
              Continue
            </Button>
          </form>
        </>
      ) : (
        <>
          <Form.Success
            title="Registration completed"
            description="You will soon receive an access confirmation email."
          />

          <p className="text-selago-700 text-center w-full">
            Already have an account?
            <Link
              to="/"
              className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
            >
              {" "}
              Login
            </Link>
          </p>
        </>
      )}
    </Form.Root>
  );
};

type StepProps = {
  number: number;
  title: string;
  current?: boolean;
  finished?: boolean;
};
const Steps = ({ number, title, current, finished }: StepProps) => (
  <div className="flex items-center gap-2">
    <div
      className={cx([
        "text-xs text-white bg-selago-500",
        "flex items-center justify-center w-5 h-5 rounded-full",
        {
          "!bg-violet-950": current,
          "!bg-green-600": finished,
        },
      ])}
    >
      {number}
    </div>
    <p
      className={cx([
        "text-sm text-selago-500",
        {
          "!text-violet-950": current,
          "!text-green-600": finished,
        },
      ])}
    >
      {title}
    </p>
  </div>
);

const SignUpSchema = z
  .object({
    name: z
      .string()
      .transform((value) => value.replace(/\d/g, ""))
      .refine((value) => value.length >= 6, {
        message: "Name required",
      }),
    email: z
      .string()
      .min(8, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    team: z
      .string()
      .transform((value) => value.replace(/\d/g, ""))
      .refine((value) => value.length >= 6, {
        message: "Team required",
      }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter",
      )
      .regex(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter",
      )
      .regex(/^(?=.*[0-9])/, "Password must contain at least one number")
      .regex(
        /^(?=.*[!@#$%^&*])/,
        "Password must contain at least one special character",
      )
      .refine((value) => value.length >= 8, {
        message: "Password must be at least 8 characters long",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFields = z.infer<typeof SignUpSchema>;
