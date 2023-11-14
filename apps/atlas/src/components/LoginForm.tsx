import React, { useState } from "react";
import { cx } from "cva";
import { WebhelpConcentrixLogo } from "../icons";

interface ILogin {
  user: string;
  password: string;
}

export const LoginForm = () => {
  const [formData, setFormData] = useState<ILogin>({
    password: "",
    user: "",
  });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Fazer algo
      } else {
        // Fazer algo
      }
    } catch (error) {
      // Fazer algo c o erro
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <section
      className={cx([
        "flex flex-col flex-grow w-full h-full",
        "bg-blue-900 relative p-5",
        "justify-center items-center",
        "lg:p-10 lg:bg-cool-blue-600",
      ])}
    >
      <div
        className={cx([
          "flex flex-col w-full h-full",
          "max-w-[22.813rem]",
          "bg-white gap-5 p-[1.875rem] rounded-[0.625rem]",
          "lg:max-w-[37.5rem] lg:max-h-[43.75rem] lg:p-[4.375rem]",
        ])}
      >
        <WebhelpConcentrixLogo />
        <div className="flex flex-col gap-2">
          <h2 className="text-blue-950 font-semibold text-3xl lg:pt-[1.875rem]">
            Login
          </h2>
          <h3 className="text-cool-gray-600">
            Insira seus dados de acesso para prosseguir.
          </h3>
        </div>
        <form
          className="flex flex-col gap-5 text-cool-gray-600"
          onSubmit={handleSubmit}
        >
          <fieldset className="flex flex-col">
            <label className="text-sm" htmlFor="user">
              Login
            </label>

            <input
              className={cx([
                "w-full h-[3.125rem] p-2.5",
                "border-cool-gray-200 border",
                "lg:w-fit lg:min-w-[20rem]",
              ])}
              type="text"
              name="user"
              id="user"
              onChange={handleValueChange}
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label className="text-sm" htmlFor="password">
              Senha
            </label>
            <input
              className={cx([
                "w-full h-[3.125rem] p-2.5",
                "border-cool-gray-200 border",
                "lg:w-fit lg:min-w-[20rem]",
              ])}
              type="password"
              name="password"
              id="password"
              onChange={handleValueChange}
            />
          </fieldset>
          <button
            className={cx([
              "w-full py-3.5 px-5",
              "bg-blue-1000 rounded-[0.625rem]",
              "hover:bg-blue-300 transition duration-300 ease-in-out",
              "text-lg font-medium text-white cursor-pointer",
              "lg:w-[14.063rem]",
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
