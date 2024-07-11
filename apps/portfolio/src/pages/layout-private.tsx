import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loading } from "~/components";
import { useLogout, useProfileQuery, useSession, useTheme } from "~/hooks";

export function PrivateLayout() {
  const navigate = useNavigate();
  const logout = useLogout();
  const { setUser, authorized } = useSession();
  const { data: profile, isSuccess, isLoading, isError } = useProfileQuery();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!authorized) navigate("/", { replace: true });
    if (authorized && isSuccess) {
      setUser(profile.user);
      setTheme(profile.user?.theme);
    }
    if (isError) {
      navigate("/");
      logout(false);
    }
    //eslint-disable-next-line
  }, [authorized, isSuccess, isError]);

  if (isLoading) return <Loading />;

  return <Outlet />;
}
