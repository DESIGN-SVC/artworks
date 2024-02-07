import { Moon, SunDim } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";


export type ToggleSwitchProps = ComponentPropsWithRef<"label">;
export const ToggleSwitch = ({ ...props }: ToggleSwitchProps) => (
  <label htmlFor="switch-theme" {...props}>
    <input
      type="checkbox"
      id="switch-theme"
      className="sr-only peer"
      defaultValue={"dark"}
    />
    <div
      className={cx([
        "flex items-center justify-between group overflow-hidden w-full max-w-44",
        "p-1 rounded-xl w-fit cursor-pointer select-none group relative z-10",
        "duration-500 ease-out bg-purple-900",
        'after:content-[""] after:rounded-xl after:w-[calc(50%_-4px)] after:h-[calc(100%_-8px)]',
        "after:bg-purple-600 after:absolute after:left-1 after:duration-500 after:-z-10 after:ease-out",
        "peer-checked:after:left-[calc(50%)] peer-checked:after:bg-white peer-checked:bg-gray-200",
      ])}
    >
      <span
        className={cx([
          "py-2.5 px-4 flex gap-1.5 items-center",
          "text-xs text-white",
          "group-peer-checked:text-violet-300",
        ])}
      >
        <Moon
          size={14}
          className="flex-none duration-300 ease-in group-peer-checked:rotate-45"
        />{" "}
        Dark
      </span>
      <span
        className={cx([
          "py-2.5 px-4 flex gap-1.5 items-center flex-none",
          "text-xs text-purple-300",
          "group-peer-checked:text-violet-600",
        ])}
      >
        <SunDim
          size={20}
          className="flex-none duration-300 ease-in group-peer-checked:rotate-90"
        />
        Light
      </span>
    </div>
  </label>
);
