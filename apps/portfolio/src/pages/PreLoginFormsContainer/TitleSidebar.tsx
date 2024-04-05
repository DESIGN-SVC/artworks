import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { useSearchParams } from "react-router-dom";
import { LogoArtworks, LogoConcentrix, Paint, PurpleCamera } from "~/icons";

export const TitleSidebar = ({
  page,
}: {
  page: "login" | "signup" | "finish";
}) => {
  const [searchParam, _] = useSearchParams();
  const finishParam = searchParam.get("finish");
  
  const pageTitles = {
    login: ["Your best ", "experience ", "starts here"],
    signup: ["Register", "to start ", "navegation"],
    finish: ["Welcome", "to Artworks", "Portfólio!"],
  };

  const currentPage = finishParam ? "finish" : page;
  return (
    <div className="w-full flex flex-col gap-16 xl:h-[30.625rem] xl:justify-between">
      <LogoArtworks className="text-white w-full max-w-48 xl:h-5" />
      <div className="flex flex-col gap-2.5 relative">
        {pageTitles[currentPage].map((el, index) => (
          <Title key={index} title={el} />
        ))}
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
        aria-description="Concentrix + Webhelp"
        className="w-full max-w-[10.63rem] max-xl:hidden h-7"
      />
    </div>
  );
};

const Title = ({ title }: ComponentPropsWithRef<"h3">) => (
  <h3
    className={cx([
      "font-medium text-3xl text-white font-montserrat",
      "bg-violet-950 w-fit py-2.5 px-5",
      "lg:text-4xl",
    ])}
  >
    {title}
  </h3>
);
