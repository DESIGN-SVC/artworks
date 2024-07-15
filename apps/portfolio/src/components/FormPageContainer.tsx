import { cx } from "cva";
import { ReactNode } from "react";

import { ComponentPropsWithRef } from "react";
import { LogoArtworks, LogoConcentrix, Paint, PurpleCamera } from "~/icons";

interface FormPageContainerProps {
  children: ReactNode;
  type?: "dark" | "light";
}

export const FormPageContainer = ({
  children,
  type = "light",
}: FormPageContainerProps) => {
  const arrTitle =
    type === "dark"
      ? ["Welcome", "to Artworks", "Portfólio!"]
      : ["Your best", "experience", "starts here"];
  return (
    <div
      className={cx(["flex-1 w-full flex xl:items-center"], {
        "bg-hero-dark": type === "dark",
        "bg-hero bg-cover bg-no-repeat bg-center": type === "light",
      })}
    >
      <section
        className={cx([
          "w-full max-w-md mx-auto py-12",
          "flex flex-col gap-10",
          "xl:container xl:flex-row xl:items-center xl:min-h-[30.625rem] xl:m-auto",
        ])}
      >
        <TitleSidebar
          children={arrTitle?.map((el, index) => (
            <Title key={index} title={el} type={type} />
          ))}
        />

        {children}
        <LogoConcentrix
          aria-description="Logo Concentrix"
          className="w-full max-w-64 mx-auto xl:hidden"
        />
      </section>
    </div>
  );
};

interface TitleSidebarProps {
  children: ReactNode;
}
const TitleSidebar = ({ children }: TitleSidebarProps) => {
  return (
    <div className="w-full flex flex-col gap-16 xl:h-[30.625rem] xl:justify-between">
      <LogoArtworks className="text-white w-full max-w-48 xl:h-5" />
      <div className="flex flex-col gap-2.5 relative">
        {children}
        <PurpleCamera
          className={cx([
            "w-full max-w-40 hover-this -rotate-[30deg]",
            "absolute left-44 bottom-2",
            "xl:max-w-64 xl:-left-44 xl:-bottom-28",
          ])}
        />
        <Paint className="max-xl:hidden w-full max-w-32 hover-this absolute left-48 -top-20 drop-shadow-md" />
      </div>
      <LogoConcentrix
        aria-description="Concentrix"
        className="w-full max-w-64 max-xl:hidden h-5"
      />
    </div>
  );
};

interface TitleProps extends ComponentPropsWithRef<"h3"> {
  title: string;
  type: "dark" | "light";
}

const Title = ({ title, type }: TitleProps) => (
  <h3
    className={cx(
      [
        "font-medium text-3xl text-white font-montserrat",
        "w-fit py-2.5 px-5",
        "lg:text-4xl",
      ],
      {
        "dark:bg-violet-800 bg-purple-900": type === "light",
        "bg-violet-950": type === "dark",
      },
    )}
  >
    {title}
  </h3>
);
