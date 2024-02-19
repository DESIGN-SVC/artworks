import { MagnifyingGlass } from "@phosphor-icons/react";
import { cx } from "cva";
import { useState } from "react";

type QueryCategory =
  | "All"
  | "Audiovisual"
  | "Photography"
  | "Branding"
  | "Design Digital";

type SearchBarProps = {
  onSearchResult: (
    queryInput: string | null,
    queryCategory: QueryCategory
  ) => void;
} & React.HTMLProps<HTMLFormElement>;

export const SearchBar = ({ onSearchResult }: SearchBarProps) => {
  const values: QueryCategory[] = [
    "All",
    "Audiovisual",
    "Photography",
    "Branding",
    "Design Digital",
  ];

  const [queryInput, setQueryInput] = useState<string | null>(null);
  const [queryCategory, setQueryCategory] = useState<QueryCategory>("All");

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInput(e.target.value === "" ? null : e.target.value);
    onSearchResult(
      e.target.value === "" ? null : e.target.value,
      queryCategory
    );
  };

  const handleQueryCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryCategory(e.target.value as QueryCategory);
    onSearchResult(queryInput, e.target.value as QueryCategory);
  };

  return (
    <form
      className={cx([
        "flex flex-row w-fit",
        "items-center justify-start",
        "rounded-[0.625rem] gap-5 p-1 pl-3.5",
        "bg-selago-50 dark:bg-violet-900",
        "transition-colors duration-200 ease-in-out",
      ])}
    >
      <fieldset
        className={cx([
          "flex flex-row justify-start items-center",
          "gap-2 w-full max-w-[13.25rem]",
        ])}
      >
        <MagnifyingGlass
          size={18}
          weight="bold"
          className="text-selago-500 dark:text-selago-600"
        />
        <input
          className={cx([
            "w-full text-sm bg-transparent focus:outline-none",
            "text-selago-500 dark:text-selago-600",
            "placeholder-selago-500 dark:placeholder-selago-600",
          ])}
          placeholder="Search projects"
          type="text"
          name="queryInput"
          id="queryInput"
          onChange={handleQuery}
        />
      </fieldset>
      <fieldset
        className={cx([
          "flex flex-row gap-2.5 p-2.5",
          "w-full max-w-[8.75rem]",
          "bg-white dark:bg-violet-900",
          "border-selago-200 dark:border-violet-800",
          "border border-solid rounded-md",
          "hover:bg-selago-100 dark:hover:bg-violet-800",
          "transition-colors duration-200 ease-in-out",
        ])}
      >
        <select
          className={cx([
            "w-full bg-transparent focus:outline-none",
            "text-xs text-selago-700 dark:text-selago-600",
            "transition-colors duration-200 ease-in-out",
          ])}
          name="searchType"
          id="searchType"
          onChange={handleQueryCategory}
        >
          {values.map((value, index) => (
            <option
              key={index}
              value={value}
              className={cx([
                "text-selago-700 dark:text-selago-300",
                "bg-white dark:bg-violet-800",
              ])}
            >
              {value}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
  );
};
