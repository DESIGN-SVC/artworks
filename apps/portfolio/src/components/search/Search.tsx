import { MagnifyingGlass } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

export const Root = ({ ...props }: ComponentPropsWithRef<"form">) => (
  <form
    className={cx([
      "flex flex-row w-fit",
      "items-center justify-start",
      "rounded-[0.625rem] gap-5 p-1 pl-3.5",
      "bg-selago-50 dark:bg-violet-900",
      "hover:bg-selago-100 dark:hover:bg-violet-900",
      "transition-colors duration-200 ease-in-out",
    ])}
    {...props}
  />
);

export const Input = ({ ...props }: ComponentPropsWithRef<"input">) => (
  <fieldset
    className={cx([
      "flex flex-row justify-start items-center",
      "gap-2 w-full max-w-[13.25rem] p-[10px]",
    ])}
  >
    <MagnifyingGlass
      size={18}
      weight="bold"
      className="text-selago-500 dark:text-selago-600"
    />
    <input
      className={cx([
        "w-full text-sm bg-transparent focus:outline-none",
        "text-selago-500 dark:text-selago-600",
        "placeholder-selago-500 dark:placeholder-selago-600",
      ])}
      type="text"
      {...props}
    />
  </fieldset>
);
