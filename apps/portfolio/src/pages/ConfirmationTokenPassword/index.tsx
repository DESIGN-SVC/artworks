import { useEffect } from "react";
import { Loading } from "~/components";

import { useConfirmationTokenPasswordQuery } from "~/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { PasswordResetForm } from "./PasswordResetForm";
import { ConfirmationTokenPasswordForm } from "./ErrorConfirmTokenPassword";
import { useJwt } from "react-jwt";

type DecodedToken = {
  email: string;
  iat: number;
  exp: number;
};

export const ConfirmationTokenPassword = () => {
  const { pathname } = useLocation();
  const token = pathname.split("/").pop();
  const navigate = useNavigate();
  const { decodedToken } = useJwt(token as string);
  const email = (decodedToken as DecodedToken)?.email as string;

  const {
    isLoading: isConfirmationTokenLoading,
    isSuccess: isConfirmationTokenSuccess,
  } = useConfirmationTokenPasswordQuery({
    token: token as string,
  });

  useEffect(() => {
    document.title = "Artworks | Redefine Password";
    if (!token) navigate("/", { replace: true });
  }, [token]);

  if (isConfirmationTokenLoading) return <Loading />;

  return (
    <>
      {isConfirmationTokenSuccess ? (
        <PasswordResetForm email={email} />
      ) : (
        <ConfirmationTokenPasswordForm
          title="Invalid password reset"
          description="Invalid Token. Please try again."
        />
      )}
    </>
  );
};
