import { FormPageContainer } from "~/components";
import { PasswordResetForm } from "./PasswordResetForm";
import { useEffect } from "react";

export const PasswordReset = () => {
  useEffect(() => {
    document.title = "Artworks | Redefine Password";
  }, []);
  return (
    <FormPageContainer>
      <PasswordResetForm />
    </FormPageContainer>
  );
};
