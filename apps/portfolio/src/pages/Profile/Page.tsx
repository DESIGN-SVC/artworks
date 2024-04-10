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
import {
  Breadcrumb,
  Search,
  Select,
  Sidebar,
  TitleReturn,
  ToggleSwitch,
} from "~/components";
import { LogoArtworks } from "~/icons";
import { Picture } from "./Picture";
import { PersonalInformation } from "./UserInformation";
import { EditPassword } from "./EditPassword";
export const Profile = () => {
  const selectValues = [
    "All",
    "Audiovisual",
    "Photography",
    "Branding",
    "Design Digital",
  ];

  const userValues = {
    fullName: "Betina R",
    email: "betina@webhelp.com",
    team: "Design",
    imgSrc:
      "https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA",
  };

  const breadcrumbPages = ["Home", "Profile"];
  
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
                href="#"
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

      <section className="flex flex-col w-full p-[1.875rem]  bg-white dark:bg-violet-1000 transition-colors duration-500">
        <nav className="max-lg:hidden flex items-center justify-between mb-5">
          <Breadcrumb pages={breadcrumbPages} />
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
        </nav>
        <TitleReturn label={"Profile"} />
        <article
          className={cx([
            "flex flex-col gap-[0.875rem] rounded-[0.625rem]",
            "w-full h-fit p-[0.875rem] mt-[1.875rem]",
            "bg-selago-50 dark:bg-violet-950",
          ])}
        >
          <Picture imgSrc={userValues.imgSrc} />
          <PersonalInformation
            fullName={userValues.fullName}
            email={userValues.email}
            team={userValues.team}
          />
          <EditPassword />
        </article>
      </section>
    </main>
  );
};
