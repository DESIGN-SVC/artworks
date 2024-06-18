import { Suspense, useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { Loading, Menu } from "~/components";
import { useCookieData, useLogout, useSession } from "~/hooks";
import { HoverAnimation } from "~/utils";

export const Root = () => {
  const { retrieveData } = useCookieData();
  const { authorized } = useSession();
  const navigate = useNavigate();
  const logout = useLogout();

  const onLogout = () => {
    if (authorized) {
      navigate("/");
      return logout(false);
    }
    return logout();
  };

  useEffect(() => {
    HoverAnimation();
    if (retrieveData("theme") === "dark") {
      document.querySelector("html")?.classList.add("dark");
    }
    if (!authorized) onLogout();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retrieveData, authorized]);

  return (
    <div className="min-h-svh flex flex-col lg:grid lg:grid-cols-[14.25rem_1fr]">
      {authorized && <Menu onLogout={onLogout} />}
      <Suspense fallback={<Loading />} />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};
