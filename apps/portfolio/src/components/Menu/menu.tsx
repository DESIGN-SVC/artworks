import {
  House,
  MagnifyingGlass,
  Palette,
  SignOut,
  VideoCamera,
  Lock,
  AppWindow,
  Camera,
} from "@phosphor-icons/react";
import { cx } from "cva";
import { LogoArtworks } from "~/icons";
import { Search, Select, Sidebar, ToggleSwitch } from "~/components";

interface MenuProps {
  onLogout: () => void;
  role: "admin" | "user" | "editor";
}

export const Menu = ({ onLogout, role }: MenuProps) => {
  const selectProject = [
    "All",
    "Audiovisual",
    "Photography",
    "Branding",
    "Design Digital",
  ];

  const listLink = [
    {
      text: "Home",
      link: "/",
      icon: <House />,
    },
    {
      text: "Audiovisual",
      link: "/",
      icon: <VideoCamera />,
    },
    {
      text: "Photography",
      link: "/",
      icon: <Camera />,
    },
    {
      text: "Pallete",
      link: "/",
      icon: <Palette />,
    },
    {
      text: "Apps",
      link: "/",
      icon: <AppWindow />,
    },
  ];

  console.log(role !== "admin");

  return (
    <nav
      className={cx([
        "w-full bg-selago-50 rounded-b-2xl",
        "lg:bg-selago-100 lg:h-svh",
        "transition-all duration-500 ease-in-out",
        "dark:bg-violet-900 ",
      ])}
    >
      <header className="container py-5 flex justify-between items-center lg:hidden overflow-hidden">
        <LogoArtworks className="lg:hidden w-[9.625rem] h-[1.125rem] text-pink-700 dark:text-violet-600" />
        <div className="flex items-center gap-5">
          <input type="checkbox" hidden className="peer" id="menu-mobile" />
          <input
            type="checkbox"
            id="inputSearch"
            hidden
            className="peer/search"
          />
          <label
            className="peer-checked/search:text-pink-600 text-selago-600 cursor-pointer"
            htmlFor="inputSearch"
          >
            <MagnifyingGlass
              size={32}
              className="transition-colors duration-500 ease-in-out"
            />
          </label>

          <div className="w-[1px] h-8 bg-selago-200 dark:bg-violet-800 'transition-all duration-500 ease-in-out'," />
          <label
            className={cx([
              "relative flex flex-col gap-2 px-1 group",
              "group origin-center transform cursor-pointer transition-all delay-300 duration-300",
              "z-[45]",
            ])}
            htmlFor="menu-mobile"
          >
            <span
              className={cx([
                "rounded-full bg-selago-600",
                "transform transition-all delay-300 duration-300",
                "block h-[2px] w-6",
                "group-peer-checked:-z-50 group-peer-checked:translate-x-8 group-peer-checked:bg-transparent",
              ])}
            />
            <span
              className={cx([
                "rounded-full bg-selago-600",
                "transform transition-all delay-300 duration-300",
                "block h-[2px] w-6",
                "group-peer-checked:-z-50 group-peer-checked:-translate-x-8 group-peer-checked:bg-transparent",
              ])}
            />
            <span
              className={cx([
                "rounded-full bg-selago-600",
                "transform transition-all delay-300 duration-300",
                "block h-[2px] w-6",
                "group-peer-checked:-z-50 group-peer-checked:translate-x-8 group-peer-checked:bg-transparent",
              ])}
            />
            <span
              className={cx([
                "absolute top-1/2 -translate-y-1/2 transform origin-center",
                "transition-all delay-300 duration-300",
                "h-[2px] w-6 group-peer-checked:rotate-45 group-peer-checked:bg-selago-800",
              ])}
            />
            <span
              className={cx(
                "absolute top-1/2 -translate-y-1/2 transform origin-center",
                "transition-all delay-300 duration-300",
                "h-[2px] w-6 group-peer-checked:-rotate-45 group-peer-checked:bg-selago-800",
              )}
            />
          </label>
          <div
            className={cx([
              "opacity-0 -z-[9999] pointer-events-none",
              "w-full max-w-96 p-1 pl-3",
              "flex items-center justify-center gap-5",
              "absolute -top-28 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "bg-selago-50 rounded-xl border border-transparent",
              "hover:border-selago-200 dark:bg-violet-900",
              "transition-all duration-300 ease-in",
              "peer-checked/search:opacity-100 peer-checked/search:top-28",
              "peer-checked/search:z-0 peer-checked/search:pointer-events-auto",
            ])}
          >
            <Search />
            <div
              className={cx([
                "p-[0.625rem] h-full ",
                "flex items-center gap-[0.625rem] flex-1",
                "bg-white rounded-md border border-selago-200",
                "dark:bg-violet-900 dark:border-violet-800",
              ])}
            >
              <Select.Root placeholder="All">
                {selectProject.map((project) => (
                  <Select.Item key={project} value={project}>
                    {project}
                  </Select.Item>
                ))}
              </Select.Root>
            </div>
          </div>
          <div
            className={cx([
              "-translate-x-[300%] peer-checked:translate-x-0",
              "fixed inset-0 z-10",
              "bg-transparent ",
              "transition-all duration-300 delay-300",
            ])}
            onClick={() => {
              const input = document.getElementById("menu-mobile");
              input?.click();
            }}
          >
            <Sidebar.Root onClick={(e) => e.stopPropagation()}>
              <ul className="flex flex-col gap-8">
                {listLink.map(({ text, icon, link }, index) => (
                  <Sidebar.Linkpage
                    key={index}
                    label={text}
                    icon={icon}
                    to={link}
                  />
                ))}
              </ul>
              <hr className="bg-selago-200 dark:bg-violet-800" />
              <div className="flex flex-col gap-8">
                <Sidebar.Linkpage
                  label={"Manage access"}
                  icon={<Lock />}
                  to={"/"}
                  className={role !== "admin" ? "hidden" : ""}
                />
                <Sidebar.Linkpage
                  label={"Logout"}
                  icon={<SignOut />}
                  to={"/"}
                  onClick={() => {
                    const input = document.getElementById("menu-mobile");
                    input?.click();
                    onLogout();
                  }}
                />
              </div>
              <hr className="bg-selago-200 dark:bg-violet-800" />
              <ToggleSwitch />
            </Sidebar.Root>
          </div>
        </div>
      </header>
      <section className="max-lg:hidden h-full">
        <Sidebar.Root>
          <LogoArtworks className="w-[9.625rem] h-[1.125rem] text-pink-700 dark:text-violet-600" />
          <hr className="bg-selago-200 dark:bg-violet-800" />
          <ul className="flex flex-col gap-8">
            {listLink.map(({ text, icon, link }, index) => (
              <Sidebar.Linkpage
                key={index}
                label={text}
                icon={icon}
                to={link}
              />
            ))}
          </ul>
          <hr className="bg-selago-200 dark:bg-violet-800" />
          <div className="flex flex-col gap-8">
            <Sidebar.Linkpage
              label={"Manage access"}
              icon={<Lock />}
              to={"/"}
              className={role !== "admin" ? "hidden" : ""}
            />
            <Sidebar.Linkpage
              label={"Logout"}
              icon={<SignOut />}
              to={"/"}
              onClick={() => {
                const input = document.getElementById("menu-mobile");
                input?.click();
                onLogout();
              }}
            />
          </div>
          <hr className="bg-selago-200 dark:bg-violet-800" />
          <ToggleSwitch />
        </Sidebar.Root>
      </section>
    </nav>
  );
};
