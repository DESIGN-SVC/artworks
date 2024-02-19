import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

export const Field = ({
  children,
  ...props
}: ComponentPropsWithRef<"select">) => {
  return (
    <fieldset
      className={cx([
        "flex flex-row gap-2.5 p-2.5",
        "w-full max-w-[8.75rem]",
        "bg-white dark:bg-violet-900",
        "border-selago-200 dark:border-violet-800",
        "border border-solid rounded-md",
      ])}
    >
      <select
        className={cx([
          "w-full bg-transparent focus:outline-none",
          "text-xs text-selago-700 dark:text-selago-600",
        ])}
        {...props}
      >
        {children}
      </select>
    </fieldset>
  );
};

export const Item = ({ ...props }: ComponentPropsWithRef<"option">) => {
  return (
    <option
      className={cx([
        "text-selago-700 dark:text-selago-300",
        "bg-white dark:bg-violet-800",
      ])}
      {...props}
    />
  );
};