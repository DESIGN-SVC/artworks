import { Title } from "~/components";
import { LoginForm } from "./LoginForm";

export const Hero = () => (
  <article className="mt-2 flex flex-1 flex-col gap-2">
    <Title label="Login" />
    <h2 className="text-lg text-gray-300">
      Insira seus dados de acesso para continuar
    </h2>
    <LoginForm />
  </article>
);
