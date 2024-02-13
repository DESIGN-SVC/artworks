import { StoryObj } from "@storybook/react";
import { SidebarProfile } from "./SidebarProfile";

export default {
  title: "Components/Sidebar/SidebarProfile",
  component: SidebarProfile,
  tags: ["autodocs"],
  args: {
    imgSrc:
    "https://media.licdn.com/dms/image/C4D03AQH42xHBPSJopQ/profile-displayphoto-shrink_800_800/0/1648127827047?e=1712793600&v=beta&t=aoi6b3Dv2b6jBR9lHuFueAT-ra3asaEo6kuqC86T2yA",
  name: "Betina",
  email: "Loremipsumdolorsit ametconsectetur adipiscing@gmail.com"
  },
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
}


export const Default: StoryObj = {};