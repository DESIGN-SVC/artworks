import { lazy } from "react";

const HomePage = lazy(() => import("./Home/index"));

function IndexPage() {
  return <HomePage />
}

export { IndexPage as Component };
