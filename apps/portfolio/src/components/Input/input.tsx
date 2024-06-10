import { Eye, EyeSlash } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, forwardRef, useId, useState } from "react";

export type InputProps = {
  label: string;
  error?: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    const id = useId();

    return (
      <fieldset
        className={cx([
          "w-full h-[4.688rem] flex-none duration-300 ease-out",
          "flex flex-col gap-1.5 justify-end relative  group",
          {
            "!h-24 !justify-center": !!error,
          },
        ])}
      >
        <input
          ref={ref}
          id={id}
          aria-labelledby={id}
          className={cx([
            "px-5 py-4 peer text-sm text-selago-950",
            "rounded-lg bg-white border border-selago-200 outline-none flex-none",
            "duration-300 ease-out",

            "placeholder:opacity-0 focus-visible:placeholder:opacity-100 placeholder:text-selago-500",

            "dark:border-transparent dark:bg-violet-950 dark:text-selago-300 dark:placeholder:text-selago-300",

            "group-hover:border-selago-300 dark:group-hover:border-transparent",
            {
              "!border-red-700 !bg-red-100 !text-red-700 placeholder:!text-red-700 animate-shake":
                !!error,
            },
            className,
          ])}
          {...props}
        />
        <Label id={id} label={label} error={error} />
        <TextError error={error} />
      </fieldset>
    );
  },
);

const Label = ({
  id,
  label,
  error,
}: {
  id: string;
  label: string;
  error?: string;
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
        "!top-0 !left-0 !text-red-800": !!error,
      },
    )}
  >
    {label}
  </label>
);

const TextError = ({ error }: { error?: string }) => (
  <span
    className={cx([
      "text-xs text-red-700",
      "left-4 bottom-10 opacity-0 invisible absolute",
      "duration-300 ease-out w-1 h-1 -m-1",
      {
        "!opacity-100 !w-auto !h-auto !visible !bottom-0 !absolute !left-1":
          !!error,
      },
    ])}
  >
    {error}
  </span>
);

export const Password = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, ...props }, ref) => {
    const id = useId();
    const [type, setType] = useState<"password" | "text">("password");

    function handleTogglePassword() {
      setType(type === "password" ? "text" : "password");
    }

    return (
      <fieldset
        className={cx([
          "w-full h-[4.688rem] flex-none duration-300 ease-out",
          "flex flex-col gap-1.5 justify-end relative  group",
          {
            "!h-24 !justify-center": !!error,
          },
          className,
        ])}
      >
        <div
          className={cx([
            "px-5 peer text-sm text-selago-950",
            "rounded-lg bg-white border border-selago-200  flex-none",
            "duration-300 ease-out",
            "flex items-center justify-between",
            "group-hover:border-selago-300 dark:group-hover:border-transparent",
            "dark:border-transparent dark:bg-violet-950 dark:text-selago-300",
            {
              "!border-red-700 !bg-red-100 !text-red-700 placeholder:!text-red-700 animate-shake":
                !!error,
            },
          ])}
        >
          <input
            ref={ref}
            id={id}
            className={cx([
              "outline-none peer bg-transparent py-4 flex-1",
              "placeholder:opacity-0 focus-visible:placeholder:opacity-100 placeholder:text-selago-500",

              "dark:placeholder:text-selago-300",
            ])}
            type={type}
            {...props}
          />

          <Label id={id} label={label} error={error} />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="text-selago-950"
          >
            {type === "password" ? <EyeSlash size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <TextError error={error} />
      </fieldset>
    );
  },
);
