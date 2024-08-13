import { Headset } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { LogoOff } from "~/icons";

export const Header = () => (
  <header className="flex w-full items-center justify-between py-7 md:py-16">
    <LogoOff alt="Logo Zétflix" className="h-8 md:h-10" />
    <Link
      to={"/contato"}
      className="flex items-center justify-center gap-3 text-yellow-100 md:text-gray-900"
    >
      <Headset
        size={24}
        weight="bold"
        className="rounded-[0.625rem] bg-gray-900 md:bg-transparent max-md:p-3 max-md:h-[3.125rem] max-md:w-fit"
      />

      <p className="hidden font-bold md:block">Canais de Atendimento</p>
    </Link>
  </header>
);
