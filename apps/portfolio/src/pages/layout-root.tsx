import { cx } from "cva";
import { Suspense, useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { Loading, Menu } from "~/components";
import { useCookieData, useLogout, useSession, useTheme } from "~/hooks";
import { HoverAnimation } from "~/utils";

export const RootLayout = () => {
  const { retrieveData } = useCookieData();
  const { authorized, user } = useSession();
  const { setTheme } = useTheme();
  const navigate = useNavigate();
  const logout = useLogout();

  const onLogout = () => {
    document.querySelector("html")?.classList.remove("dark");
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
      setTheme("dark");
    } else {
      setTheme("light");
    }

    if (!authorized) onLogout();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retrieveData, authorized]);

  return (
    <div
      className={cx(
        [
          "flex flex-col",
          "min-h-svh bg-white",
          "transition-all duration-500 ease-in-out",
          "dark:bg-violet-1000",
        ],
        {
          "lg:grid lg:grid-cols-[14.25rem_1fr]": authorized,
        },
      )}
    >
      {authorized && (
        <Menu
          onLogout={onLogout}
          role={user.role?.name as "admin" | "user" | "editor"}
          email={user.email as string}
          img={user.avatar as string}
          name={user.name as string}
          linkToProfile={`/profile/${user.id}`}
        />
      )}
      <Suspense fallback={<Loading />} />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};
