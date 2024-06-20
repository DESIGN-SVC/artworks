import { zodResolver } from "@hookform/resolvers/zod";
import { cx } from "cva";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input } from "~/components";

export const PasswordResetForm = () => {
  //provisório
  const [validation, setValidation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email },
    },
  } = useForm<PasswordResetFields>({
    resolver: zodResolver(PasswordResetSchema),
  });

  const onSubmit = handleSubmit(
    async (fields) => {
      setValidation((prev) => !prev);
      console.log(fields);
    },
    (error) => {
      console.log(error);
    },
  );

  return (
    <Form.Root>
      {validation ? (
        <Form.Success
          title="Request completed"
          description="We have sent a link to your email."
        />
      ) : (
        <>
          <Form.Title>Forgot password?</Form.Title>
          <Form.SubTitle>
            No worries, we’ll send you reset instructions.
          </Form.SubTitle>
          <form onSubmit={onSubmit} className="space-y-5">
            <Input.Input
              label="E-mail"
              placeholder="E-mail"
              type="text"
              {...register("email")}
              error={email?.message}
            />
            <Button appearance="tertiary" size="lg">
              Continue
            </Button>
          </form>
        </>
      )}
      <p
        className={cx(
          "text-selago-700 text-center w-full duration-300 ease-out ",
          {
            "!text-left mt-36": validation,
          },
        )}
      >
        Already have an account?
        <Link
          to="/"
          className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
        >
          {" "}
          Login
        </Link>
      </p>
    </Form.Root>
  );
};

const PasswordResetSchema = z.object({
  email: z
    .string()
    .min(8, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

type PasswordResetFields = z.infer<typeof PasswordResetSchema>;
