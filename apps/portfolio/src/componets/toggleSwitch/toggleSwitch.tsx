import { Moon, SunDim } from "@phosphor-icons/react";
import { cx } from "cva";

export const ToggleSwitch = () => (
  <label htmlFor="switch-theme" className="p-1 flex items-center justify-center rounded-xl w-fit cursor-pointer select-none ">
    <input type="checkbox" id="switch-theme" className="sr-only peer" />
    <span className={cx(["p-2.5 flex gap-1.5 items-center",'peer-checked:bg-black'])}>
      <Moon size={20} /> Dark
    </span>
    <span className={cx(["p-2.5 flex gap-1.5 items-center flex-none"])}>
      <SunDim size={24} className="flex-none"/>
      Light
    </span>
  </label>
);
