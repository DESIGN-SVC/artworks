import { cva, cx, VariantProps } from "cva";
import { ComponentPropsWithRef } from "react";

type DescriptionProps = {} & ComponentPropsWithRef<"button">;

export const Description = ({ children, ...props }: DescriptionProps) => {
  return (
    <button
      className={cx(
        "min-w-fit px-5 py-1 rounded-md leading-none",
        "bg-selago-950 text-violet-50 text-[0.75rem]"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

type EpisodeProps = {} & ComponentPropsWithRef<"button">;

export const Episode = ({ children, ...props }: EpisodeProps) => {
  return (
    <button
      className={cx(
        "flex flex-row items-center rounded-md",
        "px-2 py-1.5 gap-1",
        "text-[0.625rem] text-white bg-[rgba(0,0,0,0.70)]"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

type FunctionProps = {} & ComponentPropsWithRef<"button">;

export const Function = ({ children, ...props }: FunctionProps) => {
  return (
    <button
      className={cx(
        "flex flex-row rounded-lg p-[0.875rem] items-center",
        "justify-between min-w-fit w-[16.625rem] gap-1",
        "leading-[0.875rem] text-left text-[0.875rem]",
        "transition-colors duration-500 ease-in-out",
        "text-selago-800 bg-white",
        "dark:text-selago-50 dark:bg-violet-900"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

type NameProps = {} & ComponentPropsWithRef<"button">;

export const Name = ({ className, children, ...props }: NameProps) => {
  return (
    <button
      className={cx(
        "flex flex-row w-fit p-2.5 rounded-lg",
        "text-left text-[0.875rem] leading-[1.375rem]",
        "gap-2.5 justify-between min-w-fit",
        "transition-colors duration-500 ease-in-out items-center gap-1",
        "text-selago-800 bg-white",
        "dark:text-selago-50 dark:bg-violet-900"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const twSearch = cva(
  [
    "px-2.5 py-1 rounded-md bg-selago-100",
    "text-[0.75rem] text-selago-600 leading-[1.375rem]",
    "min-w-fit transition-colors duration-500 ease-in-out",
    "hover:bg-selago-200 hover:text-selago-600",
    "active:bg-selago-300 active:text-selago-200 ",
    "disabled:bg-gray-300 disabled:text-gray-100 disabled:cursor-not-allowed",
    "dark:bg-violet-950 dark:hover:bg-violet-900 dark:active:bg-violet-800 dark:active:text-selago-300",
  ],
  {
    variants: {
      current: {
        true: ["bg-violet-900 text-white dark:bg-violet-800"],
      },
    },
    defaultVariants: {
      current: false,
    },
  }
);

type SearchProps = {
  current?: boolean;
} & VariantProps<typeof twSearch> &
  ComponentPropsWithRef<"button">;

export const Search = ({
  className,
  current,
  children,
  ...props
}: SearchProps) => {
  return (
    <button className={twSearch({ className, current })} {...props}>
      {children}
    </button>
  );
};
