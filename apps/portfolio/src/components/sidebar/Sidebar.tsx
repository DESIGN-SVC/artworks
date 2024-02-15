import {
  AppWindow,
  Camera,
  House,
  List,
  Lock,
  MagnifyingGlass,
  Palette,
  SignOut,
  VideoCamera,
  X,
} from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, createContext, useState } from "react";
import { LogoArtworks } from "~/icons";
import { ToggleSwitch } from "~/components";
import { SidebarLinkPage, SidebarProfile } from ".";
import { useSidebarContext } from "~/hooks";

type SidebarContextProps = {
  openCloseState: boolean;
  setOpenCloseState: (state: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextProps>({
  openCloseState: false,
  setOpenCloseState: () => {},
});

type RootProps = {
  children: React.ReactNode;
} & ComponentPropsWithRef<"section">;

const Root = ({ children, ...props }: RootProps) => {
  const { openCloseState } = useSidebarContext();
  return (
    <section
      className={cx([
        "flex w-full flex-row h-screen fixed top-0 left-0 ",
        "lg:relative lg:sticky lg:translate-x-0",
        openCloseState
          ? "transform translate-x-0"
          : "transform -translate-x-full",
        "transition-all duration-500",
      ])}
      {...props}
    >
      {children}
    </section>
  );
};

const MobileHeader = () => {
  const { setOpenCloseState } = useSidebarContext();

  return (
    <header
      className={cx([
        "flex flex-row w-full h-fit items-center justify-between",
        "bg-selago-50 px-[1.875rem] py-6 rounded-b-[0.875rem]",
        "lg:hidden dark:bg-violet-900",
        "transition-colors duration-500 ease-in-out",
      ])}
    >
      <LogoArtworks className="lg:hidden w-[9.625rem] h-[1.125rem] text-pink-700 dark:text-violet-600" />
      <aside className="flex flex-row items-center gap-[20px] lg:hidden">
        <button className="text-white">
          <MagnifyingGlass size={32} color="#897EAD" />
        </button>
        <span className="w-[1px] h-[32px] bg-selago-200 dark:bg-violet-800" />
        <button
          className="text-white"
          onClick={() => {
            setOpenCloseState(true);
          }}
        >
          <List size={32} color="#897EAD" />
        </button>
      </aside>
    </header>
  );
};

const Content = () => {
  const { setOpenCloseState } = useSidebarContext();
  return (
    <>
      <article
        className={cx([
          "flex flex-col bg-selago-100 px-6 py-[3.125rem]",
          "w-full max-w-[21.25rem] min-h-screen justify-between",
          "text-sm items-start transition-colors duration-500",
          "overflow-y-auto overflow-x-hidden z-50 lg:z-0",
          "dark:bg-violet-950 dark:text-selago-100 ",
          "lg:rounded-r-[0.875rem] lg:max-w-[14.25rem] ",
        ])}
      >
        <section className="flex flex-col w-full gap-[1.875rem] lg:gap-5">
          <LogoArtworks
            className={cx([
              "hidden lg:block",
              "w-[9.625rem] h-[1.125rem]",
              "text-pink-700 dark:text-violet-600",
            ])}
          />

          <span
            className={cx([
              "hidden lg:block w-full h-px",
              "my-2.5 lg:my-5",
              "bg-selago-200 dark:bg-violet-700",
            ])}
          />

          <SidebarLinkPage icon={<House size={21} />} label="Home" href="#" />

          <SidebarLinkPage
            icon={<VideoCamera size={21} />}
            label="Audiovisual"
            href="#"
          />
          <SidebarLinkPage
            icon={<Camera size={21} />}
            label="Photography"
            href="#"
          />
          <SidebarLinkPage
            icon={<Palette size={21} />}
            label="Pallete"
            href="#"
          />
          <SidebarLinkPage
            icon={<AppWindow size={21} />}
            label="Apps"
            href="#"
          />

          <span
            className={cx([
              "w-full h-px",
              "my-2.5 lg:my-5",
              "bg-selago-200 dark:bg-violet-700",
            ])}
          />

          <SidebarLinkPage
            icon={<Lock size={21} />}
            label="Manage access"
            href="#"
          />
          <SidebarLinkPage
            icon={<SignOut size={21} />}
            label="Logout"
            href="#"
          />

          <span
            className={cx([
              "w-full h-px bg-selago-200",
              "mt-2.5 mb-10 dark:bg-violet-700",
            ])}
          />
        </section>
        <section className="flex flex-col gap-10 w-full">
          <ToggleSwitch />
          <SidebarProfile
            imgSrc="https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA"
            name="Betina"
            email="aaa@gmial.com"
            href="#"
          />
        </section>
      </article>
      <button
        onClick={() => setOpenCloseState(false)}
        className={cx([
          "bg-selago-50 lg:hidden dark:bg-violet-900",
          "rounded-r-[0.875rem] min-w-[5.625rem] h-fit",
          "px-[1.875rem] py-6 shadow-md",
        ])}
      >
        <X size={32} color="#61597A" />
      </button>
    </>
  );
};

export const Sidebar = () => {
  const [openCloseState, setOpenCloseState] = useState<boolean>(false);
  const value = { openCloseState, setOpenCloseState };
  return (
    <SidebarContext.Provider value={value}>
      <MobileHeader />
      <Root>
        <Content />
      </Root>
    </SidebarContext.Provider>
  );
};
