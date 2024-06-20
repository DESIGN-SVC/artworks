import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { RootLayout } from "./pages/layout-root";
import { Signup } from "./pages/signup";
import { PasswordReset } from "./pages/PasswordReset";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "/signup", element: <Signup /> },
      { path: "/password/reset", element: <PasswordReset /> },
    ],
  },
]);
