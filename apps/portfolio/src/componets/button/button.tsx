import { cx } from "cva";
import { ComponentProps } from "react";


export const Button = ({...props}: ComponentProps<"button">) => {
  return (
    <button
      className={cx(
        "font-sans py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white "
      )}
      {...props}
    />
  );
};
