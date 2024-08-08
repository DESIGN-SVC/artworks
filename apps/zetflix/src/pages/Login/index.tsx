import { Eye, EyeSlash, Headset, InstagramLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import { Button } from "~/components";
import { Facebook, LogoOff } from "~/icons";

export default function LoginPage() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="w-full bg-white md:bg-bgTablet md:bg-contain md:bg-right md:bg-no-repeat">
      <section className="flex min-h-screen w-full flex-col justify-between px-6 md:px-[3.625rem] xl:mx-auto xl:max-w-7xl xl:px-[5.75rem] xl:py-3">
        <header className="flex w-full items-center justify-between py-7 md:py-16">
          <LogoOff
            alt="Logo Zétflix"
            className="w-[5.625rem h-8 md:h-10 md:w-28"
          />
          <Link
            to={"/contato"}
            className="flex items-center justify-center gap-3 text-yellow-100 md:text-gray-900"
          >
            <div className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-[0.625rem] bg-gray-900 md:w-fit md:bg-transparent">
              <Headset size={24} weight="bold" />
            </div>
            <span className="hidden font-bold md:block">
              Canais de Atendimento
            </span>
          </Link>
        </header>
        <div className="mt-2 flex flex-1 flex-col gap-2">
          <h1 className="text-[2rem] font-bold">Login</h1>
          <p className="text-lg text-gray-300">
            Insira seus dados de acesso para continuar
          </p>
          <Form
            method="post"
            className="mt-4 flex flex-col items-center gap-6 md:items-start"
          >
            <fieldset className="flex w-full flex-col gap-1 md:max-w-[21.25rem]">
              <label htmlFor="email" className="font-bold text-gray-900">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="h-12 rounded-lg border pl-4 outline-yellow-100"
                name="email"
              />
            </fieldset>
            <fieldset className="flex w-full flex-col gap-1 md:max-w-[21.25rem]">
              <label htmlFor="password" className="font-bold text-gray-900">
                Senha
              </label>
              <div className="flex h-12 w-full items-center rounded-lg border outline-2 outline-yellow-100 focus-within:border-transparent focus-within:outline">
                <input
                  type={visiblePassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="flex-1 pl-4 pl-4 outline-none"
                />
                <button
                  type="button"
                  className="pr-4 text-gray-700"
                  onClick={() => setVisiblePassword(!visiblePassword)}
                >
                  {visiblePassword ? (
                    <Eye size={24} weight="fill" />
                  ) : (
                    <EyeSlash size={24} weight="fill" />
                  )}
                </button>
              </div>
            </fieldset>
            <Button type="submit" name="submit" className="md:max-w-[176px]">
              Continuar
            </Button>
          </Form>
        </div>
        <footer className="flex w-full flex-col items-center justify-center gap-8 pb-3 pt-16 md:flex-row-reverse md:justify-between md:pb-14">
          <nav className="flex w-full items-center justify-center gap-2 md:justify-end">
            <a
              href="https://www.facebook.com/zedeliverydebebidas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Zé Delivery"
              className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-lg bg-gray-900 text-yellow-100"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/zedelivery/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Zé Delivery"
              className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-lg bg-gray-900 text-yellow-100"
            >
              <InstagramLogo size={24} weight="bold" />
            </a>
          </nav>
          <p className="text-center text-gray-300 md:whitespace-nowrap">
            © {new Date().getFullYear()} Zé Delivery - Todos os direitos
            reservados
          </p>
        </footer>
      </section>
    </div>
  );
}

// export async function action({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");
//   if (!email || !password) return null;
//   if (email === "zetflix@admin.com" && password === "zetflix@23") {
//     localStorage.setItem(
//       "token",
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjpmYWxzZSwiaWF0IjoxNTE2MjM5MDIyfQ.3ASYbfgOEFCRmR9mcoIeg4XiUst2MWUcMtVGFaMBdlk"
//     );
//     return redirect("/home");
//   }
//   return null;
// }
