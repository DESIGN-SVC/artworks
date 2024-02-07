import { Moon, SunDim } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

export type ToggleSwitchProps = ComponentPropsWithRef<"button">;
export const ToggleSwitch = ({ ...props }: ToggleSwitchProps) => {
  const handleToggleDark = () => {
    if (document.querySelector("html")?.classList.contains("dark")) {
      document.querySelector("html")?.classList.remove("dark");
    } else {
      document.querySelector("html")?.classList.add("dark");
    }
  };

  return (
    <button onClick={handleToggleDark} {...props}>
      <div
        className={cx([
          "flex items-center justify-between group overflow-hidden w-full max-w-44",
          "p-1 rounded-xl w-fit cursor-pointer select-none group relative z-10",
          "duration-500 ease-out bg-selago-200",

          'after:content-[""] after:rounded-xl after:w-[calc(50%_-4px)] after:h-[calc(100%_-8px)]',
          "after:bg-white after:left-1/2 after:absolute after:duration-500 after:-z-10 after:ease-out",

          "dark:bg-violet-970 dark:after:bg-violet-800 dark:after:left-1",
        ])}
      >
        <span
          className={cx([
            "py-2.5 px-4 flex gap-1.5 items-center",
            "text-xs text-selago-500",
            "dark:text-white",
          ])}
        >
          <Moon
            size={14}
            className="flex-none duration-500 ease-in dark:rotate-0 rotate-45"
          />{" "}
          Dark
        </span>
        <span
          className={cx([
            "py-2.5 px-4 flex gap-1.5 items-center flex-none",
            "text-xs text-selago-800",
            "dark:text-violet-300",
          ])}
        >
          <SunDim
            size={20}
            className="flex-none duration-500 ease-in dark:rotate-0 rotate-90"
          />
          Light
        </span>
      </div>
    </button>
  );
};
