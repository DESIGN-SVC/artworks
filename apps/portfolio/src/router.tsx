import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Root,
  Profile,
  PasswordReset,
  SignUp,
  Login,
  PasswordRecovery,
} from "./pages";

export const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        id: "login",
        path: "/",
        element: <Login />,
      },
      {
        id: "signup",
        path: "/accounts/signup",
        element: <SignUp />,
      },
      {
        id: "password-recovery",
        path: "/accounts/password/recovery",
        element: <PasswordRecovery />,
      },
      {
        id: "password-reset",
        path: "/accounts/password/reset",
        element: <PasswordReset />,
      },
      {
        id: "home",
        path: "/home",
        element: <Home />,
      },
      {
        id: "profile",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
