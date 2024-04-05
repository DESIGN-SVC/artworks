import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button, Form, Input } from "~/components";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, password },
    },
  } = useForm<LoginFields>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = handleSubmit(
    async (fields) => {
      console.log(fields);
      navigate("/home");
    },
    (error) => {
      console.log(error);
    },
  );
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
        <div className="space-y-2.5 text-end">
          <Input.Password
            label="Password"
            placeholder="Password"
            {...register("password")}
            error={password?.message}
          />
          <Link
            to={"/accounts/password/recovery"}
            className="ml-auto w-fit text-xs text-violet-600 hover:text-violet-500 font-semibold transition-colors "
          >
            Forgot your password?
          </Link>
        </div>
        <Button appearance="tertiary" size="lg">
          Continue
        </Button>
        <p className="text-selago-700 text-center w-full">
          Don't have on account yet?{" "}
          <Link
            to={"/accounts/signup"}
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
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginFields = z.infer<typeof LoginSchema>;
