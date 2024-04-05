import { AccountForms } from "~/forms";
import { TitleSidebar } from "~/pages/PreLoginFormsContainer/TitleSidebar";
import { PreLoginFormsContainer } from ".";

export const Login = () => {
  return (
    <PreLoginFormsContainer page="login">
      <TitleSidebar page="login" />
      <AccountForms.Login />
    </PreLoginFormsContainer>
  );
};
