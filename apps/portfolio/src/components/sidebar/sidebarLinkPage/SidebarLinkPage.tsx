import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

type SidebarLinkPageProps = {
  icon?: React.ReactNode;
  label: string;
  href?: string;
} & ComponentPropsWithRef<"a">;

export const SidebarLinkPage = ({
  icon,
  label,
  href,
  ...props
}: SidebarLinkPageProps) => {
  return (
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
};
