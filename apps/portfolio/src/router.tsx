import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { RootLayout } from "./pages/layout-root";
import { SignUp } from "./pages/signup";
import { PasswordReset } from "./pages/PasswordReset";
import { PrivateLayout } from "./pages/layout-private";
import { Profile } from "./pages/Profile";
import { Confirmation } from "./pages/Confirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/password/reset", element: <PasswordReset /> },
      { path: "/confirmation/:token", element: <Confirmation /> },
      {
        element: <PrivateLayout />,
        children: [{ path: "/profile/:id", element: <Profile /> }],
      },
    ],
  },
]);
