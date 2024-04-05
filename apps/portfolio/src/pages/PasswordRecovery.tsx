import { AccountForms } from "~/forms";
import { PreLoginFormsContainer } from ".";
import { TitleSidebar } from "./PreLoginFormsContainer/TitleSidebar";

export const PasswordRecovery = () => {
  return (
    <PreLoginFormsContainer page="login">
      <TitleSidebar page="login" />
      <AccountForms.PasswordRecovery />
    </PreLoginFormsContainer>
  );
};
