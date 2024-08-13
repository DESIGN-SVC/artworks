import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Loading } from "~/components";
import { useLoginMutation } from "~/hooks";

export const LoginForm = () => {
  const { mutate: login, isLoading } = useLoginMutation();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFields>({ resolver: zodResolver(loginSchema) });

  const onSubmit = handleSubmit(async (fields) => {
    login(fields);
    reset();
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <form
        className="mt-4 flex flex-col items-center gap-6 md:items-start"
        onSubmit={onSubmit}
      >
        <Input
          id="email"
          label="E-mail"
          placeholder="Digite seu email"
          {...register("email")}
          error={!!errors.email}
          message={errors.email?.message}
        />
        <Input
          type={"password"}
          id="password"
          label="Senha"
          placeholder="Digite sua senha"
          {...register("password")}
          error={!!errors.password}
          message={errors.password?.message}
          className="w-full"
        />

        <Button type="submit" className="md:max-w-[176px]">
          Continuar
        </Button>
      </form>
    </>
  );
};

const loginSchema = z.object({
  email: z
    .string()
    .min(6, { message: "E-mail é obrigatório." })
    .email({ message: "Digite um E-mail válido." }),
  password: z.string().min(1, { message: "Digite sua senha." }),
});
export type LoginFields = z.infer<typeof loginSchema>;
