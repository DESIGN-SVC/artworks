import { lazy } from "react";

const Login = lazy(() => import("./Login/index"));

function IndexPage() {
  return <Login />
}

export { IndexPage as Component };
