import { MagnifyingGlass } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef } from "react";

type SearchProps = ComponentPropsWithRef<"input"> & {
  onSearch?: () => void;
};
export const Search = ({ onSearch, ...props }: SearchProps) => (
  <div
    className="flex items-center gap-2 w-full max-w-[13.25rem]"
    onClick={() => {
      document.getElementById("search-project")?.focus();
      if (onSearch) onSearch();
    }}
  >
    <MagnifyingGlass
      size={16}
      weight="bold"
      className="transition-colors duration-500 ease-in-out flex-none text-selago-500 dark:text-selago-600"
    />
    <input
      type="text"
      id="search-project"
      placeholder="Search projects"
      className={cx([
        "py-[0.625rem]",
        "bg-transparent outline-none select-none",
        "text-sm font-semibold text-selago-800 dark:text-selago-600",
        "placeholder:text-selago-500 placeholder:font-normal",
      ])}
      {...props}
    />
  </div>
);
