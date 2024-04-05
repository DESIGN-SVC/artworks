import { AccountForms } from "~/forms";
import { TitleSidebar } from "~/pages/PreLoginFormsContainer/TitleSidebar";
import { useSearchParams } from "react-router-dom";
import { PreLoginFormsContainer } from ".";

export const SignUp = () => {
  const [searchParam, _] = useSearchParams();
  const passwordParam = searchParam.get("password");

  return (
    <PreLoginFormsContainer page="signup">
      {!passwordParam && <TitleSidebar page="signup" />}
      <AccountForms.SignUp />
    </PreLoginFormsContainer>
  );
};
