import { X } from "@phosphor-icons/react";
import { cva, cx, VariantProps } from "cva";
import { ComponentPropsWithRef, useState } from "react";

type DescriptionProps = {
  text: string;
} & ComponentPropsWithRef<"h5">;

export const Description = ({ text, ...props }: DescriptionProps) => {
  return (
    <h5
      className={cx(
        "w-fit px-5 py-1 rounded-md leading-none",
        "bg-selago-950 text-violet-50 text-[0.75rem]",
      )}
      {...props}
    >
      {text}
    </h5>
  );
};

type EpisodeProps = {
  icon?: React.ReactNode;
  text: string;
} & ComponentPropsWithRef<"h5">;

export const Episode = ({ icon, text, ...props }: EpisodeProps) => {
  return (
    <h5
      className={cx(
        "flex flex-row items-center rounded-md",
        "px-2 py-1.5 gap-1 w-fit",
        "text-[0.625rem] text-white bg-[rgba(0,0,0,0.70)]",
      )}
      {...props}
    >
      {icon}
      {text}
    </h5>
  );
};

type ProductionProps = {
  personName: string;
  personFunction: string;
  deleting?: boolean;
  handleDelete?: () => void;
} & ComponentPropsWithRef<"article">;

export const Production = ({
  personName,
  deleting,
  personFunction,
  handleDelete,
  ...props
}: ProductionProps) => {
  const [deletingState, setDeletingState] = useState<boolean>(false);

  const handleDeleteButton = () => {
    deleting && setDeletingState(true);
    setTimeout(() => {
      handleDelete && handleDelete();
    }, 300);
  };

  return (
    <article
      className={cx(
        "flex flex-row rounded-lg p-[0.875rem] items-center",
        "justify-between min-w-fit w-[16.625rem] text-left",
        "bg-white dark:bg-violet-800",
        {
          "animate-openProdCast": deleting && !deletingState,
          "animate-closeProdCast": deletingState,
        },
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <p className="text-sm leading-[0.875rem] text-selago-800 dark:text-selago-50">
          {personName}
        </p>
        <p className="text-xs leading-[0.875rem] text-selago-600 dark:text-selago-400">
          {personFunction}
        </p>
      </div>
      {deleting && (
        <button onClick={handleDeleteButton}>
          <X size={16} className="text-selago-700 dark:text-selago-50" />
        </button>
      )}
    </article>
  );
};

type CastProps = {
  personName: string;
  deleting?: boolean;
  handleDelete?: () => void;
} & ComponentPropsWithRef<"article">;

export const Cast = ({
  personName,
  deleting,
  handleDelete,
  ...props
}: CastProps) => {
  const [deletingState, setDeletingState] = useState<boolean>(false);

  const handleDeleteButton = () => {
    deleting && setDeletingState(true);
    setTimeout(() => {
      handleDelete && handleDelete();
    }, 300);
  };
  return (
    <article
      className={cx(
        "flex flex-row w-fit p-2.5 rounded-lg",
        "gap-2.5 justify-between min-w-fit",
        "bg-white items-center gap-1",
        "dark:text-selago-50 dark:bg-violet-800",
        {
          "animate-openProdCast": deleting && !deletingState,
          "animate-closeProdCast": deletingState,
        },
      )}
      {...props}
    >
      <span className="text-sm leading-[1.375rem] text-selago-800 text-left dark:text-selago-50">
        {personName}
      </span>
      {deleting && (
        <button onClick={handleDeleteButton}>
          <X size={16} className="text-selago-700 dark:text-selago-50" />
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
  },
);

type SearchProps = {
  text: string;
  current?: boolean;
} & VariantProps<typeof twSearch> &
  ComponentPropsWithRef<"button">;

export const Search = ({ text, current, ...props }: SearchProps) => {
  return (
    <button className={twSearch({ current })} {...props}>
      {text}
    </button>
  );
};
