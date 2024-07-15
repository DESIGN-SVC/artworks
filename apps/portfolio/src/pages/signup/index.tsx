import { FormPageContainer } from "~/components";
import { SignUpForm } from "./SignUpForm";
import { useEffect } from "react";

export const SignUp = () => {
  useEffect(() => {
    document.title = "Artworks | Sign Up";
  }, []);

  return (
    <FormPageContainer>
      <SignUpForm />
    </FormPageContainer>
  );
};
