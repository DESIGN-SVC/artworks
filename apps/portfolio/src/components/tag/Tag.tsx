import { X } from "@phosphor-icons/react";
import { cva, cx, VariantProps } from "cva";
import { ComponentPropsWithRef } from "react";

type DescriptionProps = {
  text: string;
} & ComponentPropsWithRef<"button">;

export const Description = ({ text, ...props }: DescriptionProps) => {
  return (
    <button
      className={cx(
        "min-w-fit px-5 py-1 rounded-md leading-none",
        "bg-selago-950 text-violet-50 text-[0.75rem]"
      )}
      {...props}
    >
      {text}
    </button>
  );
};

type EpisodeProps = {
  icon?: React.ReactNode;
  text: string;
} & ComponentPropsWithRef<"button">;

export const Episode = ({ icon, text, ...props }: EpisodeProps) => {
  return (
    <button
      className={cx(
        "flex flex-row items-center rounded-md",
        "px-2 py-1.5 gap-1",
        "text-[0.625rem] text-white bg-[rgba(0,0,0,0.70)]"
      )}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
};

type ProductionProps = {
  personName: string;
  personFunction: string;
  type?: "normal" | "delete";
} & ComponentPropsWithRef<"button">;

export const Production = ({
  personName,
  personFunction,
  type,
  ...props
}: ProductionProps) => {
  return (
    <article
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
      <span className="flex flex-col gap-[4px]">
        {personName}
        <br />
        <span className="text-[12px] text-violet-300">{personFunction}</span>
      </span>
      {type === "delete" && (
        <button>
          <X size={16} />
        </button>
      )}
    </article>
  );
};

type CastProps = {
  personName: string;
  type?: "normal" | "delete";
} & ComponentPropsWithRef<"button">;

export const Cast = ({ personName, type, ...props }: CastProps) => {
  return (
    <article
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
      <span>{personName}</span>
      {type === "delete" && (
        <button>
          <X size={16} />
        </button>
      )}
    </article>
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
  text: string;
  current?: boolean;
} & VariantProps<typeof twSearch> &
  ComponentPropsWithRef<"button">;

export const Search = ({
  text,
  current,
  children,
  ...props
}: SearchProps) => {
  return (
    <button className={twSearch({ current })} {...props}>
      {text}
    </button>
  );
};
