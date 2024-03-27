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
import { Profile, Sidebar, ToggleSwitch } from "~/components";
import { LogoArtworks } from "~/icons";
export const Home = () => (
  <div className="flex flex-col lg:flex-row bg-selago-50 w-screen">
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
              href="#"
            />
          </Sidebar.SectionItem>
        </Sidebar.Section>
      </Sidebar.Portal>
    </Sidebar.Root>
    <div className="flex flex-col gap-[20px] p-[20px] w-full">
      <Profile.Picture imgSrc="https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA" />
      <Profile.Information
        fullName="Betina"
        email="betina@wh.com"
        team="Design"
      />
      <Profile.Security />
    </div>
  </div>
);
