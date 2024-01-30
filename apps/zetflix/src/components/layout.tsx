import { ReactNode } from "react";
import { useMatches } from "react-router-dom";
import { Footer, Header } from "./ui";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const matches = useMatches();
  const hiddenComponent = matches.at(-1)?.pathname === "/";

  return (
    <section className="flex min-h-screen flex-col">
      {!hiddenComponent && <Header />}
      {children}
      {!hiddenComponent && <Footer />}
    </section>
  );
};
