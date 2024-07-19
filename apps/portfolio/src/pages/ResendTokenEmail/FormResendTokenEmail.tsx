import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import { z } from "zod";
import { Button, Form, Input, Loading } from "~/components";
import { useResendTokenEmailMutation } from "~/hooks";

export const FormResendTokenEmail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const eligible = state?.eligible;
  const {
    mutate: resendTokenEmail,
    isPending,
    isSuccess,
    isError,
    error,
    reset: reset,
  } = useResendTokenEmailMutation();

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email },
    },
    reset: resetForm,
  } = useForm<ResendTokenEmailFields>({
    resolver: zodResolver(ResendTokenEmailSchema),
  });

  const onSubmit = handleSubmit(async ({ email }) => {
    resendTokenEmail({ email });
  });
  useEffect(() => {
    if (!eligible) navigate("/", { replace: true });
    //eslint-disable-next-line
  }, [eligible]);

  if (isPending) return <Loading />;

  return (
    <Form.Root>
      <form className="space-y-5" onSubmit={onSubmit}>
        {!isSuccess && !isError && (
          <>
            <div className="space-y-1">
              <Form.Title>Recover access</Form.Title>
              <Form.SubTitle>Enter your e-mail</Form.SubTitle>
            </div>
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
          </>
        )}
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
                error?.error?.error === "User not found"
                  ? "We couldn't find a user with this email."
                  : "We couldn't send a link to your email."
              }
            />
            {error?.error?.error === "User not found" ? (
              <Button
                appearance="tertiary"
                size="lg"
                type="button"
                onClick={() => {
                  reset();
                  resetForm();
                }}
              >
                resend email
              </Button>
            ) : (
              <Button appearance="tertiary" size="lg">
                try again
              </Button>
            )}
          </>
        )}
      </form>
    </Form.Root>
  );
};

const ResendTokenEmailSchema = z.object({
  email: z
    .string()
    .min(8, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export type ResendTokenEmailFields = z.infer<typeof ResendTokenEmailSchema>;
