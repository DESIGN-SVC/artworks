import { Slot } from "@radix-ui/react-slot";
import { cx } from "cva";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  label: string;
  error?: boolean;
  message?: string;
  asChild?: boolean;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      placeholder,
      id,
      error = false,
      message,
      asChild,
      className,
      ...props
    }: InputProps,
    ref
  ) => {
    const Comp = asChild ? Slot : "input";
    return (
      <fieldset className="w-full flex flex-col gap-1">
        {label && (
          <label className="flex items-center gap-8" htmlFor={id}>
            <span className="font-bold text-gray-900">{label}</span>
          </label>
        )}
        <div
          className={cx([
            "flex w-full p-2 pl-4 md:max-w-[21.25rem]",
            "border border-gray-400 rounded-[8px]",
            "transition-colors duration-300",
            "focus-within:border-black hover:border-gray-700",
            {
              "animate-shake border-red-200 focus-within:border-red-200 hover:border-red-200":
                error,
            },
          ])}
        >
          <Comp
            id={id}
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={cx("text-16 text-gray-700 outline-none", className)}
            {...props}
          />
        </div>
        <span className={cx(["text-red-200 font-medium"])}>{message}</span>
      </fieldset>
    );
  }
);
