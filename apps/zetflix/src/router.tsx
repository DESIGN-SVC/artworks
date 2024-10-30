import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/layout-root"),
    children: [
      { index: true, lazy: () => import("./pages/index") },
      { path: "contato", lazy: () => import("./pages/Contact") },
      { path: "*", lazy: () => import("./pages/NotFound") },
      {
        lazy: () => import("./pages/layout-private"),
        children: [
          { path: "player/:id", lazy: () => import("./pages/Player") },
        ],
      },
    ],
  },
]);
