import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HoverAnimation } from "~/utils";

export const Root = () => {
  useEffect(() => {
    HoverAnimation();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
};
