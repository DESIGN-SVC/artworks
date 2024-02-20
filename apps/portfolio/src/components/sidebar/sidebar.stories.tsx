import {
  AppWindow,
  Camera,
  House,
  Palette,
  SignOut,
  VideoCamera,
  Lock,
} from "@phosphor-icons/react";
import { StoryObj } from "@storybook/react";
import { cx } from "cva";
import { Sidebar, ToggleSwitch } from "~/components";
import { LogoArtworks } from "~/icons";
import { LinkPage, Profile } from "~/components/sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar.Root,
  tags: ["autodocs"],
  args: {
    openCloseState: true,
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default: StoryObj = {
  args: {
    children: (
      <>
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
            <LinkPage icon={<House size={21} />} label="Home" href="#" />
            <LinkPage
              icon={<VideoCamera size={21} />}
              label="Audiovisual"
              href="#"
            />
            <LinkPage
              icon={<Camera size={21} />}
              label="Photography"
              href="#"
            />
            <LinkPage icon={<Palette size={21} />} label="Pallete" href="#" />
            <LinkPage icon={<AppWindow size={21} />} label="Apps" href="#" />

            <span
              className={cx([
                "w-full h-px",
                "mb-10 mt-2.5",
                "bg-selago-200 dark:bg-violet-700",
              ])}
            />
          </Sidebar.SectionItem>
          <Sidebar.SectionItem>
            <LinkPage
              icon={<Lock size={21} />}
              label="Manage access"
              href="#"
            />
            <LinkPage icon={<SignOut size={21} />} label="Logout" href="#" />

            <span
              className={cx([
                "w-full h-px bg-selago-200",
                "mb-10 mt-2.5 dark:bg-violet-700",
              ])}
            />
          </Sidebar.SectionItem>
          <Sidebar.SectionItem>
            <ToggleSwitch />
            <Profile
              imgSrc="https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA"
              name="Betina"
              email="aaa@gmial.com"
              href="#"
            />
          </Sidebar.SectionItem>
        </Sidebar.Section>
        <Sidebar.Close setOpenCloseState={() => {}} />
      </>
    ),
  },
};
