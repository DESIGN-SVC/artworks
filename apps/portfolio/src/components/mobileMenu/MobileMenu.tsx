import { ComponentPropsWithRef } from "react";
import { useSearchParams } from "react-router-dom";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { cx } from "cva";
import { LogoArtworks } from "~/icons";
import { Search, Select } from "~/components";

export const MobileMenu = ({ ...props }: ComponentPropsWithRef<"header">) => {
  const selectValues = [
    "All",
    "Audiovisual",
    "Photography",
    "Branding",
    "Design Digital",
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  const sidebarParam = searchParams.get("sidebar");
  const searchParam = searchParams.get("search");

  const handleSidebarState = (sidebar: boolean) => {
    setSearchParams((state) => {
      sidebar ? state.set("sidebar", "true") : state.delete("sidebar");
      return state;
    });
  };

  const handleSearchState = (search: boolean) => {
    setSearchParams((state) => {
      search ? state.set("search", "true") : state.delete("search");
      return state;
    });
  };

  return (
    <header
      className={cx([
        "flex flex-col w-full h-fit lg:hidden",
        "items-center justify-between",
      ])}
      {...props}
    >
      <section
        className={cx([
          "flex flex-row w-full h-fit",
          "items-center justify-between",
          "px-[1.875rem] py-6 rounded-b-[0.875rem]",
          "bg-selago-50 dark:bg-violet-900",
          "transition-colors duration-500 ease-in-out",
        ])}
      >
        <LogoArtworks className="lg:hidden w-[9.625rem] h-[1.125rem] text-pink-700 dark:text-violet-600" />
        <aside className="flex flex-row items-center gap-5 lg:hidden">
          <label
            className="text-white cursor-pointer"
            onClick={() => {
              handleSearchState(!searchParam);
            }}
          >
            <MagnifyingGlass
              size={32}
              color={searchParam ? "#F50DA3" : "#897EAD"}
              className="transition-colors duration-500 ease-in-out"
            />
          </label>
          <span className="w-px h-8 bg-selago-200 dark:bg-violet-800" />
          <button
            className="text-white"
            onClick={() => {
              handleSidebarState(!sidebarParam);
            }}
          >
            <List size={32} color="#897EAD" />
          </button>
        </aside>
      </section>
      {searchParam && (
        <section className="p-5 animate-openProdCast">
          <Search.Root>
            <Search.Input placeholder="Search projects" />
            <Select.Root>
              {selectValues.map((value) => (
                <Select.Item key={value} value={value}>
                  {value}
                </Select.Item>
              ))}
            </Select.Root>
          </Search.Root>
        </section>
      )}
    </header>
  );
};
