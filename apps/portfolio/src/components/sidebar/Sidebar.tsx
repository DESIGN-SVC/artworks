import { CaretRight, X } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";
import { useSearchParams } from "react-router-dom";

export const Root = ({ ...props }: ComponentPropsWithRef<"section">) => {
  const [searchParams] = useSearchParams();
  const sidebar = searchParams.get("sidebar");
  return (
    <section
      className={cx([
        "flex w-full flex-row h-screen fixed top-0 left-0 ",
        "lg:sticky lg:translate-x-0",
        "transform duration-500 ease-in-out",
        { "translate-x-0": sidebar },
        { "-translate-x-full": !sidebar },
      ])}
      {...props}
    />
  );
};

export const Section = ({ ...props }: ComponentPropsWithRef<"article">) => (
  <article
    className={cx([
      "flex flex-col bg-selago-100 px-6 py-[3.125rem]",
      "w-full max-w-[21.25rem] min-h-screen justify-start",
      "text-sm items-start transition-colors duration-500",
      "overflow-y-auto overflow-x-hidden z-50 lg:z-0",
      "dark:bg-violet-950 dark:text-selago-100 ",
      "lg:rounded-r-[0.875rem] lg:max-w-[14.25rem]",
    ])}
    {...props}
  />
);

export const SectionItem = ({ ...props }: ComponentPropsWithRef<"section">) => (
  <section
    className="flex flex-col w-full gap-[1.875rem] lg:gap-5"
    {...props}
  />
);

export const Close = ({ ...props }: ComponentPropsWithRef<"button">) => {
  const [_, setSearchParams] = useSearchParams();

  const handleSidebarState = (sidebar: boolean) => {
    setSearchParams((state) => {
      sidebar ? state.set("sidebar", "true") : state.delete("sidebar");
      return state;
    });
  };
  return (
    <button
      onClick={() => {
        handleSidebarState(false);
      }}
      className={cx([
        "bg-selago-50 lg:hidden dark:bg-violet-900",
        "rounded-r-[0.875rem] min-w-[5.625rem] h-fit",
        "px-[1.875rem] py-6 shadow-sm z-20 dark:shadow-lg",
      ])}
      {...props}
    >
      <X size={32} color="#61597A" />
    </button>
  );
};

type LinkpageProps = {
  icon?: React.ReactNode;
  label: string;
} & ComponentPropsWithRef<"a">;

export const Linkpage = ({ icon, label, href, ...props }: LinkpageProps) => (
  <a
    className={cx([
      "flex flex-row w-full",
      "justify-left items-center gap-1.5",
      "text-sm text-selago-500 cursor-pointer",
    ])}
    href={href}
    {...props}
  >
    {icon}
    <p>{label}</p>
  </a>
);

type ProfileProps = {
  imgSrc: string;
  name: string;
  email: string;
  href: string;
} & ComponentPropsWithRef<"a">;

export const Profile = ({
  imgSrc,
  name,
  email,
  href,
  ...props
}: ProfileProps) => (
  <a
    className={cx([
      "flex flex-row w-full rounded-xl p-1",
      "break-all text-white gap-2.5 items-top",
      "hover:transition-all hover:duration-500",
      "hover:bg-selago-50 hover:shadow-sm",
      "dark:hover:bg-violet-1000 dark:hover:shadow-lg",
    ])}
    href={href}
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
