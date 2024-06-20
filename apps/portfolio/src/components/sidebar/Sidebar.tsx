import { CaretRight } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { Link, LinkProps } from "react-router-dom";

export const Root = ({ ...props }: ComponentPropsWithRef<"section">) => {
  return (
    <section
      className={cx([
        "w-full max-w-sm px-6 py-[3.125rem] h-full",
        "flex flex-col gap-10",
        "bg-selago-100 shadow-lg",
        "dark:bg-violet-900",
        "transition-all duration-500 ease-in-out",
      ])}
      {...props}
    />
  );
};

type LinkpageProps = {
  icon?: React.ReactNode;
  label: string;
} & LinkProps;

export const Linkpage = ({
  icon,
  label,
  className,
  ...props
}: LinkpageProps) => (
  <Link
    className={cx([
      "flex flex-row w-fit",
      "justify-left items-center gap-1.5",
      "text-sm text-selago-500 cursor-pointer",
      "hover:text-selago-600",
      className,
    ])}
    {...props}
  >
    {icon}
    <p>{label}</p>
  </Link>
);

type ProfileProps = {
  imgSrc: string;
  name: string;
  email: string;
} & ComponentPropsWithRef<"a">;

export const Profile = ({ imgSrc, name, email, ...props }: ProfileProps) => (
  <a
    className={cx([
      "flex flex-row w-full rounded-xl p-1",
      "break-all text-white gap-2.5 items-top",
      "hover:transition-all hover:duration-500",
      "hover:bg-selago-50 hover:shadow-sm",
      "dark:hover:bg-violet-1000 dark:hover:shadow-lg",
    ])}
    {...props}
  >
    <img
      src={imgSrc}
      className="w-9 h-9 rounded-full"
      alt={"Profile picture of" + name}
    />
    <article className="w-full">
      <h6
        className={cx([
          "font-medium text-selago-950 text-sm",
          "leading-none dark:text-selago-100",
        ])}
      >
        <p>{name}</p>
      </h6>
      <h6 className="text-selago-700 text-xs">{email}</h6>
    </article>
    <CaretRight
      size={14}
      className="text-selago-200 min-w-fit dark:text-selago-500"
      weight="bold"
    />
  </a>
);
