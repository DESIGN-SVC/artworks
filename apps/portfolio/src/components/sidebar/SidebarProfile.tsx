import { CaretRight } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

type SidebarProfileProps = {
  imgSrc: string;
  name: string;
  email: string;
  href?: string;
} & ComponentPropsWithRef<"a">;

export const SidebarProfile = ({
  imgSrc,
  name,
  email,
  href,
  ...props
}: SidebarProfileProps) => {
  return (
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
        alt="Profile picture"
      />
      <article className="w-full">
        <h6
          className={cx([
            "font-medium text-selago-950 text-sm",
            "leading-none dark:text-selago-100",
          ])}
        >
          {name}
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
};