import { useLogout } from "~/hooks";
import { Suspense, useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { Loading } from "~/components";
import { useSession } from "~/context/Session";

export function RootLayout() {
  const logout = useLogout();
  const { authorized } = useSession();
  const navigate = useNavigate();
  const onLogout = () => {
    if (authorized) {
      navigate("/");
      return logout(false);
    }
    return logout();
  };

  useEffect(() => {
    if (!authorized) onLogout();
    //eslint-disable-next-line
  }, [authorized]);

  return (
    <div className="relative flex min-h-screen-d flex-col">
      <Suspense fallback={<Loading />} />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export { RootLayout as Component };
