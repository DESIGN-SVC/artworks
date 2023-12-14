import { cx } from "cva";
import { WebhelpConcentrixLogo } from "../icons";

export const LoginForm = () => {
  return (
    <section
      className={cx([
        "flex flex-col w-full h-full",
        "bg-blue-1000 p-5",
        "justify-center items-center",
        "xl:bg-cool-blue-600 xl:p-10 xl:min-w-[48.5vw] ",
      ])}
    >
      <div
        className={cx([
          "flex flex-col w-full h-full bg-white",
          "gap-5 p-[1.875rem] rounded-[0.625rem]",
          "max-w-[22.813rem] lg:min-h-[38rem]",
          "xl:max-w-[37.5rem] xl:max-h-[43.75rem]",
          "xl:px-[5.313rem] xl:py-[2.688rem] xl:self-start",
        ])}
      >
        <header className="flex flex-col gap-2">
          <WebhelpConcentrixLogo className="min-h-[0.875rem]" />
          <h2
            className={cx([
              "text-green-950 text-xl font-semibold pt-5",
              "xl:text-3xl xl:pt-[3.125rem] xl:pb-[0.313rem]",
            ])}
          >
            Login
          </h2>
          <h3 className="text-cool-gray-600">
            Insira seus dados de acesso para prosseguir.
          </h3>
        </header>
        <form className="flex flex-col gap-5 text-cool-gray-600">
          <fieldset className="flex flex-col gap-2">
            <label className="text-sm disabled:text-gray-200" htmlFor="cpf">
              CPF
            </label>

            <input
              className={cx([
                "w-full h-[3.125rem] p-4",
                "border-cool-gray-200 border rounded",
                "hover:border-cool-gray-600 transition duration-500 ease-in-out",
                "focus:border-spicy-blue-400 focus:border-2 focus:outline-none",
                "disabled:bg-gray-200 disabled:text-gray-200",
                "xl:w-full",
              ])}
              type="text"
              name="cpf"
              id="cpf"
              placeholder="000.000.000-00"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label className="text-sm disabled:text-gray-200" htmlFor="email">
              Login
            </label>

            <input
              className={cx([
                "w-full h-[3.125rem] p-4",
                "border-cool-gray-200 border rounded",
                "hover:border-cool-gray-600 transition duration-500 ease-in-out",
                "focus:border-spicy-blue-400 focus:border-2 focus:outline-none",
                "disabled:bg-gray-200 disabled:text-gray-200",
              ])}
              type="text"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label className="text-sm color-cool-gray-200" htmlFor="password">
              Senha
            </label>
            <input
              className={cx([
                "w-full h-[3.125rem] p-4",
                "border-cool-gray-200 border rounded",
                "hover:border-cool-gray-600 transition duration-500 ease-in-out",
                "focus:border-spicy-blue-400 focus:border-2 focus:outline-none",
                "disabled:bg-gray-200 disabled:text-gray-200",
                "xl:w-full placeholder:translate-y-[0.25rem] placeholder:text-lg",
              ])}
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            />
          </fieldset>
          <button
            className={cx([
              "w-full py-4 px-5",
              "bg-spicy-blue-400 rounded-xl",
              "hover:bg-spicy-blue-500 transition duration-500 ease-in-out",
              "focus:bg-spicy-blue-600",
              "disabled:bg-gray-100 disabled:text-gray-600",
              "text-1.125rem font-medium text-white cursor-pointer",
            ])}
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
