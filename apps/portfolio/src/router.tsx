import { createBrowserRouter } from "react-router-dom";
import { Home, Root, Profile, PreLoginFormsContainer } from "./pages";
import { AccountForms } from "./forms";

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
        element: (
          <PreLoginFormsContainer>
            <AccountForms.Login />
          </PreLoginFormsContainer>
        ),
      },
      {
        id: "signup",
        path: "/accounts/signup",
        element: (
          <PreLoginFormsContainer>
            <AccountForms.SignUp />
          </PreLoginFormsContainer>
        ),
      },
      {
        id: "password-reset",
        path: "/accounts/password/reset",
        element: (
          <PreLoginFormsContainer>
            <AccountForms.PasswordReset />
          </PreLoginFormsContainer>
        ),
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
      }
    ],
  },
]);
