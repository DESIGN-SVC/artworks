import { Headset, SignOut } from "@phosphor-icons/react";
import { cx } from "cva";
import { Link, useMatches } from "react-router-dom";
import { Logo } from "../../icons";

export const Header = () => {
  const matches = useMatches();
  const filtered = Object.keys(matches[1].params).map((key) => key === "*");

  return (
    <header className="bg-radial-gradient">
      <nav
        className={cx([
          "flex w-full items-center justify-between px-6 py-2 ",
          "md:px-[3.625rem] md:py-[0.563rem]",
          "xl:mx-auto xl:max-w-7xl xl:px-[5.75rem] xl:py-3",
        ])}
      >
        <Link to="/" aria-label="Página inicial do Zétflix">
          <Logo
            alt="Logo Zétflix"
            className="w-[5.625rem h-8 md:h-10 md:w-28"
          />
        </Link>
        <aside className="flex items-center gap-8">
          <Link
            to={"/contato"}
            className="flex items-center gap-3 text-yellow-100"
          >
            <Headset size={24} weight="bold" />
            <span className="hidden font-bold md:block">
              Canais de Atendimento
            </span>
          </Link>
          {filtered[0] ? null : (
            <Link
              to={"/"}
              onClick={() => localStorage.removeItem("token")}
              className="flex items-center gap-3 border-l border-yellow-100 pl-8 text-yellow-100"
            >
              <SignOut size={24} weight="bold" />
              <span className="hidden font-bold md:block">Sair</span>
            </Link>
          )}
        </aside>
      </nav>
    </header>
  );
};
