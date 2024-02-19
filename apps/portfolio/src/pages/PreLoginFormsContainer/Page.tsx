import { LogoConcentrixWebhelp } from "~/icons";
import { TitleSidebar } from "./TitleSidebar";

import { cx } from "cva";
import { ReactNode } from "react";

export const PreLoginFormsContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="w-full bg-hero flex-1 bg-cover bg-no-repeat bg-center flex xl:items-center">
      <section
        className={cx([
          "w-full max-w-md mx-auto py-12",
          "flex flex-col gap-10",
          "xl:container xl:flex-row xl:items-center xl:min-h-[30.625rem] xl:m-auto",
        ])}
      >
        <TitleSidebar />

        {children}
        <LogoConcentrixWebhelp
          aria-description="Concentrix + Webhelp"
          className="w-full max-w-64 mx-auto xl:hidden"
        />
      </section>
    </div>
  );
};
