import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/layout-root"),
    children: [{ index: true, lazy: () => import("./pages/page") }],
  },
]);
