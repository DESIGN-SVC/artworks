import { useEffect } from "react";
import { FormPageContainer } from "~/components";
import { FormResendTokenEmail } from "./FormResendTokenEmail";

export const ResendTokenEmail = () => {
  useEffect(() => {
    document.title = "Artworks | Resend Token";
  }, []);

  return (
    <FormPageContainer>
      <FormResendTokenEmail />
    </FormPageContainer>
  );
};
