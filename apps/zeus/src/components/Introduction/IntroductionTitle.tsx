import { cx } from "cva";

export const IntroductionTitle = () => {
  return (
    <header className="flex flex-col gap-5 font-zen-dots lg:order-2 lg:mt-24">
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
      <h2 className="text-white text-center text-[2.375rem] leading-tight lg:text-left lg:text-[3.125rem]">
        AGENTE
        <br />
        DIGITAL
        <br />
        DE VOZ
      </h2>
    </header>
  );
};
