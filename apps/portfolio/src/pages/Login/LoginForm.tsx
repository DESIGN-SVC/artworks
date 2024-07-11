import { zodResolver } from "@hookform/resolvers/zod";
import { WarningOctagon } from "@phosphor-icons/react";
import { cx } from "cva";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input, Loading } from "~/components";
import { useLoginMutation } from "~/hooks";

export const LoginForm = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isPending,
    isSuccess,
    isError,
    error,
  } = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
    reset,
  } = useForm<LoginFields>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    login({
      email,
      password,
    });
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  console.log(error?.error.message);
  if (isPending) return <Loading />;

  return (
    <Form.Root>
      <div className="space-y-1">
        <Form.Title>Login</Form.Title>
        <Form.SubTitle>Enter your access</Form.SubTitle>
      </div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <Input.Input
          label="E-mail"
          placeholder="E-mail"
          type="text"
          {...register("email")}
          error={email?.message}
        />
        <fieldset className="text-end">
          <Input.Password
            label="Password"
            placeholder="Password"
            {...register("password")}
            error={password?.message}
          />
          <Link
            to={"password/reset"}
            onClick={(e) => e.preventDefault()}
            className="text-gray-500 cursor-not-allowed mt-2 block"
            /* className="ml-auto w-fit text-xs text-violet-600 hover:text-violet-500 font-semibold transition-colors " */
          >
            Forgot your password?
          </Link>
        </fieldset>
        {isError && (
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
        )}
        <Button appearance="tertiary" size="lg">
          Continue
        </Button>
        <p className="text-selago-700 text-center w-full">
          Don't have on account yet?{" "}
          <Link
            to={"/signup"}
            className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
          >
            Sign up
          </Link>
        </p>
      </form>
    </Form.Root>
  );
};

const LoginSchema = z.object({
  email: z
    .string()
    .min(8, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginFields = z.infer<typeof LoginSchema>;
