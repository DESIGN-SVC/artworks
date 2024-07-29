import { cx } from "cva";
import { Suspense, useEffect } from "react";
import {
  Outlet,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Loading, Menu } from "~/components";
import { useLogout, useSession, useTheme } from "~/hooks";
import { HoverAnimation } from "~/utils";

export const RootLayout = () => {
  const { authorized, user } = useSession();
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();
  const logout = useLogout();
  const { pathname } = useLocation();

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
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
    }

    if (!authorized) onLogout();

    // eslint-disable-next-line
  }, [theme, authorized, pathname]);

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
          img={user.avatar_url as string}
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
