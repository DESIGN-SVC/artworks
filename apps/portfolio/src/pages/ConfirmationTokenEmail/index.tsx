import { FormPageContainer } from "~/components";
import { FormConfirmation } from "./FormConfirmation";
import { useEffect } from "react";

export const ConfirmationTokenEmail = () => {
  useEffect(() => {
    document.title = "Artworks | Confirm Token";
  }, []);
  return (
    <FormPageContainer type="dark">
      <FormConfirmation />
    </FormPageContainer>
  );
};
