import {
  AppWindow,
  Camera,
  House,
  Palette,
  SignOut,
  VideoCamera,
  Lock,
} from "@phosphor-icons/react";
import { cx } from "cva";
import { Search, Select, Sidebar, ToggleSwitch } from "~/components";
import { LogoArtworks } from "~/icons";
export const Home = () => {
  const selectValues = ["All projects", "Photography", "Audiovisual", "Apps"];

  const userValues = {
    fullName: "Betina R",
    email: "betina@webhelp.com",
    team: "Design",
    imgSrc:
      "https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA",
  };
  return (
    <main className="flex flex-col bg-white dark:bg-violet-1000 lg:flex-row">
      <Sidebar.Root>
        <Sidebar.MobileMenu />
        <Sidebar.Portal>
          <Sidebar.Close />
          <Sidebar.Section>
            <Sidebar.SectionItem>
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
                  "mt-2.5 lg:mt-5 mb-10",
                  "bg-selago-200 dark:bg-violet-700",
                ])}
              />
            </Sidebar.SectionItem>
            <Sidebar.SectionItem>
              <Sidebar.Linkpage
                icon={<House size={21} />}
                label="Home"
                href="/home"
              />
              <Sidebar.Linkpage
                icon={<VideoCamera size={21} />}
                label="Audiovisual"
                href="#"
              />
              <Sidebar.Linkpage
                icon={<Camera size={21} />}
                label="Photography"
                href="#"
              />
              <Sidebar.Linkpage
                icon={<Palette size={21} />}
                label="Pallete"
                href="#"
              />
              <Sidebar.Linkpage
                icon={<AppWindow size={21} />}
                label="Apps"
                href="#"
              />

              <span
                className={cx([
                  "w-full h-px",
                  "mb-10 mt-2.5",
                  "bg-selago-200 dark:bg-violet-700",
                ])}
              />
            </Sidebar.SectionItem>
            <Sidebar.SectionItem>
              <Sidebar.Linkpage
                icon={<Lock size={21} />}
                label="Manage access"
                href="#"
              />
              <Sidebar.Linkpage
                icon={<SignOut size={21} />}
                label="Logout"
                href="#"
              />

              <span
                className={cx([
                  "w-full h-px bg-selago-200",
                  "mb-10 mt-2.5 dark:bg-violet-700",
                ])}
              />
            </Sidebar.SectionItem>
            <Sidebar.SectionItem>
              <ToggleSwitch />
              <Sidebar.Profile
                imgSrc="https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA"
                name="Betina"
                email="betina@wh.com"
                href="/profile"
              />
            </Sidebar.SectionItem>
          </Sidebar.Section>
        </Sidebar.Portal>
      </Sidebar.Root>
      <section className="flex flex-col p-[1.875rem] w-full bg-white dark:bg-violet-1000">
        <nav className="flex items-center justify-between mb-5 border-b border-selago-200 dark:border-violet-700 pb-[14px] lg:pb-5">
        <article className="grid grid-cols-[auto,1fr] grid-rows-[auto,1fr] grid-flow-col auto-cols-min space-x-5">
          <img
            src={userValues.imgSrc}
            alt="Profile Picture"
            className="w-[58px] object-cover rounded-full row-span-2"
            />
            <h2 className="text-[24px] font-semibold text-selago-950">Hello, {userValues.fullName}</h2>
            <p className="text-selago-700">Welcome to the Artworks Portfolio.</p>
        </article>
          <Search.Root className="max-lg:hidden">
            <Search.Input placeholder="Search projects" />
            <Select.Root>
              {selectValues.map((value) => (
                <Select.Item key={value} value={value}>
                  {value}
                </Select.Item>
              ))}
            </Select.Root>
          </Search.Root>
        </nav>
        
      </section>
    </main>
  );
};
