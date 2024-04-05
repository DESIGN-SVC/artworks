import { AccountForms } from "~/forms";
import { PreLoginFormsContainer } from ".";
import { TitleSidebar } from "./PreLoginFormsContainer/TitleSidebar";
import { useSearchParams } from "react-router-dom";

export const PasswordReset = () => {
  const [searchParams, _] = useSearchParams();
  const passwordParam = searchParams.get("password");
  return (
    <PreLoginFormsContainer page="signup">
      {!passwordParam && <TitleSidebar page="signup" />}
      <AccountForms.PasswordReset />
    </PreLoginFormsContainer>
  );
};
