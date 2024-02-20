import { X } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

type RootProps = {
  openCloseState: boolean;
} & ComponentPropsWithRef<"section">;

export const Root = ({ openCloseState, children, ...props }: RootProps) => {
  return (
    <section
      className={cx([
        "flex w-full flex-row h-screen fixed top-0 left-0 ",
        "lg:relative lg:sticky lg:translate-x-0",
        openCloseState
          ? "transform translate-x-0"
          : "transform -translate-x-full",
        "duration-500 ease-in-out",
      ])}
      {...props}
    >
      {children}
    </section>
  );
};

export const Section = ({
  children,
  ...props
}: ComponentPropsWithRef<"article">) => {
  return (
    <>
      <article
        className={cx([
          "flex flex-col bg-selago-100 px-6 py-[3.125rem]",
          "w-full max-w-[21.25rem] min-h-screen justify-start",
          "text-sm items-start transition-colors duration-500",
          "overflow-y-auto overflow-x-hidden z-50 lg:z-0",
          "dark:bg-violet-950 dark:text-selago-100 ",
          "lg:rounded-r-[0.875rem] lg:max-w-[14.25rem]",
        ])}
        {...props}
      >
        {children}
      </article>
    </>
  );
};

export const SectionItem = ({
  children,
  ...props
}: ComponentPropsWithRef<"section">) => {
  return (
    <section
      className="flex flex-col w-full gap-[1.875rem] lg:gap-5"
      {...props}
    >
      {children}
    </section>
  );
};

type CloseProps = {
  setOpenCloseState: (state: boolean) => void;
} & ComponentPropsWithRef<"button">;

export const Close = ({ setOpenCloseState, ...props }: CloseProps) => {
  return (
    <button
      onClick={() => setOpenCloseState(false)}
      className={cx([
        "bg-selago-50 lg:hidden dark:bg-violet-900",
        "rounded-r-[0.875rem] min-w-[5.625rem] h-fit",
        "px-[1.875rem] py-6 shadow-md z-50",
      ])}
      {...props}
    >
      <X size={32} color="#61597A" />
    </button>
  );
};
