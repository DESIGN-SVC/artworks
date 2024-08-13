import { useSession } from "~/context/Session";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer, Header } from "~/components";

const token = await localStorage.getItem("token");
function PrivateLayout() {
  const navigate = useNavigate();
  const { authorized } = useSession();

  useEffect(() => {
    if (!authorized || !token) navigate("/", { replace: true });
    //eslint-disable-next-line
  }, [authorized]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export { PrivateLayout as Component };
