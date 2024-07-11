import { FormPageContainer } from "~/components";
import { LoginForm } from "./LoginForm";
import { useEffect } from "react";

export const Login = () => {
  useEffect(() => {
    document.title = "Artworks | Login";
  }, []);

  return (
    <FormPageContainer>
      <LoginForm />
    </FormPageContainer>
  );
};
