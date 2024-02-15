import { useContext } from "react";
import { SidebarContext } from "~/components/sidebar/Sidebar";

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};