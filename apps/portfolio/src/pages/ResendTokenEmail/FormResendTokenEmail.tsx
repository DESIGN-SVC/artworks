import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Button, Form, Input, Loading } from "~/components";
import { useResendTokenEmailMutation } from "~/hooks";

export const FormResendTokenEmail = () => {
  const {
    mutate: resendTokenEmail,
    isPending,
    isSuccess,
  } = useResendTokenEmailMutation();

  const {
    register,
    handleSubmit,
    formState: {
      errors: { email },
    },
    reset,
  } = useForm<ResendTokenEmailFields>({
    resolver: zodResolver(ResendTokenEmailSchema),
  });

  const onSubmit = handleSubmit(async ({ email }) => {
    resendTokenEmail({ email });
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  console.log(isSuccess);

  if (isPending) return <Loading />;

  return (
    <Form.Root>
      <div className="space-y-1">
        <Form.Title>Recover access</Form.Title>
        <Form.SubTitle>Enter your e-mail</Form.SubTitle>
      </div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <Input.Input
          label="E-mail"
          placeholder="E-mail"
          type="text"
          {...register("email")}
          error={email?.message}
        />
        {/* {isError && (
          <div
            className={cx([
              "flex items-center gap-2.5",
              "p-2.5",
              "text-red-500 text-sm",
              "bg-red-50 rounded-lg",
            ])}
          >
            <WarningOctagon size={20} />
            <p>{error?.error.message}</p>
          </div>
        )} */}
        <Button appearance="tertiary" size="lg">
          Continue
        </Button>
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
