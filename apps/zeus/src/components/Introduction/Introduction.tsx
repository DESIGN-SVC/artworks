import { cx } from "cva";
import { IntroductionTitle, VideoButton } from ".";
import { ConcentrixWebhelpLogo, Robot } from "../../icons";
import { MouseSimple } from "phosphor-react";

export const Introduction = () => {
  return (
    <section
      className={cx([
        "flex flex-col items-center relative",
        "w-full min-h-screen px-[1.875rem] gap-[1.875rem]",
        "bg-gradient-to-r from-blue-900 to-blue-1100",
        "lg:grid lg:grid-cols-2 lg:auto-rows-auto lg:gap-0 lg:items-baseline",
        "lg:relative lg:px-28 lg:grid-col-gap-5 lg:row-gap-[1.875rem]",
        "xl:px-60",
      ])}
    >
      <ConcentrixWebhelpLogo
        className={cx([
          "w-full min-h-[6.063rem] py-10 ",
          "lg:order-1 lg:col-span-2 lg:row-span-1",
        ])}
      />
      <IntroductionTitle />
      <Robot className="h-full mt-auto lg:order-3 lg:row-span-4" />
      <VideoButton />
      <h6 className="hidden lg:flex flex-row items-center text-white lg:order-4 gap-2.5 text-sm font-medium">
        <MouseSimple size={32} color="#fafeff" weight="light" />
        Mais Informações
      </h6>
    </section>
  );
};
