import { zodResolver } from "@hookform/resolvers/zod";
import { cx } from "cva";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input, Loading } from "~/components";
import { useSendingTokenPasswordMutation } from "~/hooks";

export const PasswordResetForm = () => {
  const {
    mutate: resetPassword,
    isSuccess,
    isError,
    error,
    isPending,
  } = useSendingTokenPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email },
    },
  } = useForm<PasswordResetFields>({
    resolver: zodResolver(PasswordResetSchema),
  });

  const onSubmit = handleSubmit(async (fields) => {
    resetPassword(fields);
  });
  if (isPending) return <Loading />;
  return (
    <Form.Root>
      {isSuccess && (
        <Form.Success
          title="Request completed"
          description="We have sent a link to your email."
        />
      )}
      {isError && (
        <>
          <Form.Error
            title="Request failed"
            description={
              error?.error?.error === "Email not verified"
                ? " Email not verified"
                : error?.error?.error === "User not found"
                  ? "User not found"
                  : "Please try again later."
            }
          />
          {error?.error?.error === "Email not verified" && (
            <Link
              to="/"
              className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
            >
              Connect now
            </Link>
          )}
          {error?.error?.error === "User not found" && (
            <p className="text-selago-700 text-center w-full">
              Don't have on account yet?{" "}
              <Link
                to={"/signup"}
                className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
              >
                Sign up
              </Link>
            </p>
          )}
        </>
      )}
      {!isSuccess && !isError && (
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
          <p
            className={cx(
              "text-selago-700 text-center w-full duration-300 ease-out ",
            )}
          >
            Already have an account?
            <Link
              to="/"
              className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
            >
              Connect now
            </Link>
          </p>
        </>
      )}
    </Form.Root>
  );
};

const PasswordResetSchema = z.object({
  email: z
    .string()
    .min(8, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export type PasswordResetFields = z.infer<typeof PasswordResetSchema>;
