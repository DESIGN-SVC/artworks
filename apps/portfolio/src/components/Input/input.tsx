import { cx } from "cva";
import { ComponentPropsWithRef, useId } from "react";

export type InputProps = {
  label: string;
  error: string;
} & ComponentPropsWithRef<"input">;

export const Input = ({ label, error, ...props }: InputProps) => {
  const id = useId();

  return (
    <fieldset
      className={cx([
        "w-full h-24",
        "flex flex-col gap-1.5 relative justify-center group",
      ])}
    >
      <input
        id={id}
        className={cx([
          "px-5 py-4 peer text-sm text-selago-950",
          "rounded-lg bg-white border border-selago-200 outline-none",
          "duration-300 ease-out",

          "placeholder:opacity-0 focus-visible:placeholder:opacity-100 placeholder:text-selago-500",

          "dark:border-transparent dark:bg-violet-950 dark:text-selago-300 dark:placeholder:text-selago-300",

          "group-hover:border-selago-300 dark:group-hover:border-transparent",
          {
            "!border-red-700 !bg-red-100 !text-red-700 placeholder:!text-red-700 animate-shake":
              !!error,
          },
        ])}
        {...props}
        aria-labelledby={id}
        required
      />
      <Label id={id} label={label} error={error} />
      <TextError error={error} />
    </fieldset>
  );
};

const Label = ({
  id,
  label,
  error,
}: {
  id: string;
  label: string;
  error: string;
}) => (
  <label
    htmlFor={id}
    className={cx(
      "cursor-pointer duration-300 ease-out select-none",
      "text-xs text-selago-800",
      "absolute left-0 top-0",
      "peer-focus:duration-300 peer-focus:top-0 peer-focus:left-0",
      "peer-placeholder-shown:top-10 peer-placeholder-shown:left-5",
      "dark:text-selago-50",
      {
        "!top-0 !left-0": !!error,
      }
    )}
  >
    {label}
  </label>
);

const TextError = ({ error }: { error: string }) => (
  <span
    className={cx([
      "text-xs text-red-700",
      "left-4 bottom-10 opacity-0 invisible",
      "duration-300 ease-out",
      {
        "!opacity-100 !left-0 !visible !bottom-0 !absolute": !!error,
      },
    ])}
  >
    {error}
  </span>
);
