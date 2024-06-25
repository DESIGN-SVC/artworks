import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loading } from "~/components";
import { useProfileQuery, useSession } from "~/hooks";

export function PrivateLayout() {
  const navigate = useNavigate();
  const { setUser, authorized } = useSession();
  const { data: profile, isSuccess, isLoading } = useProfileQuery();

  useEffect(() => {
    if (!authorized) navigate("/", { replace: true });
    if (authorized && isSuccess) setUser(profile.user);
    //eslint-disable-next-line
  }, [authorized, isSuccess]);

  if (isLoading) return <Loading />;

  return <Outlet />;
}
