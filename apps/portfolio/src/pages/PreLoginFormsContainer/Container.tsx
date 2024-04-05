import { LogoConcentrix } from "~/icons";
import { cx } from "cva";
import { ReactNode } from "react";

export const PreLoginFormsContainer = ({
  page,
  children,
}: {
  page: "login" | "signup" | "finish";
  children: ReactNode;
}) => {
  
  const bgImage = {
    login: "bg-hero",
    signup: "bg-purple",
    finish: "bg-purple",
  };

  return (
    <div className={`w-full bg-hero flex-1 bg-cover bg-no-repeat bg-center flex xl:items-center ${bgImage[page]}`}>
      <section
        className={cx([
          "w-full max-w-md mx-auto py-12",
          "flex flex-col gap-10",
          "xl:container xl:flex-row xl:items-center xl:min-h-[30.625rem] xl:m-auto",
        ])}
      >
        {children}
        <LogoConcentrix
          aria-description="Concentrix"
          className="w-full max-w-[9.375rem] mx-auto xl:hidden"
        />
      </section>
    </div>
  );
};
