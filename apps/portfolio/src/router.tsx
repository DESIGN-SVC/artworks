import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages";
import { RootLayout } from "./pages/layout-root";
import { SignUp } from "./pages/signup";
import { PasswordReset } from "./pages/PasswordReset";
import { PrivateLayout } from "./pages/layout-private";
import { Profile } from "./pages/Profile";
import { ConfirmationTokenEmail } from "./pages/ConfirmationTokenEmail";
import { ResendTokenEmail } from "./pages/ResendTokenEmail";
import { ConfirmationTokenPassword } from "./pages/ConfirmationTokenPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "signup", element: <SignUp /> },
      { path: "password/reset", element: <PasswordReset /> },
      {
        path: "password/confirmation/:token",
        element: <ConfirmationTokenPassword />,
      },
      {
        path: "token/confirmation/:token",
        element: <ConfirmationTokenEmail />,
      },
      { path: "token/resend", element: <ResendTokenEmail /> },
      {
        element: <PrivateLayout />,
        children: [{ path: "/profile/:id", element: <Profile /> }],
      },
    ],
  },
]);
