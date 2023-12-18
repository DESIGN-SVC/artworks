import { cx } from "cva";
import { MouseSimple } from "phosphor-react";
import { ModalVideo } from "~/components";
import { ConcentrixWebhelpLogo, Robot } from "~/icons";

export const HomePage = () => {
  console.log("Home Page"); // teste de deploy vercel
  return (
    <div className="flex-1">
      <Hero />
      <ModalVideo.Root>
        <ModalVideo.Trigger />
        <ModalVideo.Content />
      </ModalVideo.Root>
    </div>
  );
};

const Hero = () => (
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
        "w-full min-h-[6.063rem] py-10 animate-fade",
        "lg:order-1 lg:col-span-2 lg:row-span-1",
      ])}
    />
    <header className="flex flex-col gap-5 font-zen-dots lg:order-2 lg:mt-[4.25rem]">
      <h1 className="flex flex-row gap-2.5 items-center text-blue-500 text-xl">
        ZEUS
        <span
          className={cx([
            "text-blue-800 text-[0.938rem] rounded-md",
            "py-1.5 px-3.5 bg-gradient-to-r from-blue-100 to-blue-350",
          ])}
        >
          PERSONAS
        </span>
      </h1>
      <h2
        data-ani
        className="text-white text-center text-[2.375rem] leading-tight lg:text-left lg:text-[3.125rem]"
      >
        AGENTE
        <br />
        DIGITAL
        <br />
        DE VOZ
      </h2>
    </header>
    <Robot className="h-full mt-auto lg:order-3 lg:row-span-4 animate-animation-up" />
    <h6 className="hidden lg:flex flex-row items-center text-white lg:order-4 gap-2.5 text-sm font-medium">
      <MouseSimple size={32} color="#fafeff" weight="light" />
      Mais Informações
    </h6>
  </section>
);

export default HomePage;
