import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useState } from "react";
import { LogoArtworks } from "~/icons";
import { Searchbar } from "~/components";
import { Select } from "~/components/searchbar";

type MobileHeaderProps = {
  openCloseState: boolean;
  setOpenCloseState: (state: boolean) => void;
} & ComponentPropsWithRef<"header">;

export const MobileHeader = ({
  openCloseState,
  setOpenCloseState,
  ...props
}: MobileHeaderProps) => {
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);
  return (
    <>
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
            <button
              className="text-white"
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <MagnifyingGlass
                size={32}
                color={openSearchBar ? "#F50DA3" : "#897EAD"}
                className="transition-colors duration-500 ease-in-out"
              />
            </button>
            <span className="w-px h-8 bg-selago-200 dark:bg-violet-800" />
            <button
              className="text-white"
              onClick={() => {
                setOpenCloseState(!openCloseState);
              }}
            >
              <List size={32} color="#897EAD" />
            </button>
          </aside>
        </section>
        {openSearchBar && (
          <section
            className={cx([
              "p-5 animate-openProdCast",
              "ransition-all duration-500 ease-in-out",
            ])}
          >
            <Searchbar.Root>
              <Searchbar.Input placeholder="Search projects" />
              <Select.Field>
                <Select.Item value="all">All</Select.Item>
                <Select.Item value="audiovisual">Audiovisual</Select.Item>
              </Select.Field>
            </Searchbar.Root>
          </section>
        )}
      </header>
    </>
  );
};

