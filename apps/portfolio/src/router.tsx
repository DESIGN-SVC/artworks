import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { RootLayout } from "./pages/layout-root";
import { Signup } from "./pages/signup";
import { PasswordReset } from "./pages/PasswordReset";
import { PrivateLayout } from "./pages/layout-private";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "/signup", element: <Signup /> },
      { path: "/password/reset", element: <PasswordReset /> },
      {
        element: <PrivateLayout />,
        children: [{ path: "/profile/:id", element: <Profile /> }],
      },
    ],
  },
]);
