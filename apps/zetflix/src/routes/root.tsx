import { Outlet } from "react-router-dom";
import { Layout } from "../components/layout";

export const Root = () => (
  <Layout>
    <Outlet></Outlet>
  </Layout>
);
