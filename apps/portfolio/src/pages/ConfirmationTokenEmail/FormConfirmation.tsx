import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Loading } from "~/components";
import { useConfirmationTokenEmailQuery } from "~/hooks";
import { useJwt } from "react-jwt";

interface ApiError {
  code: number;
  error: {
    code: string;
    message: string;
  };
}

export const FormConfirmation = () => {
  const { pathname } = useLocation();
  const token = pathname.split("/").pop();
  const navigate = useNavigate();
  const { isExpired } = useJwt(token as string);

  const { isLoading, isSuccess, isError, error } =
    useConfirmationTokenEmailQuery({
      token: token as string,
    });

  useEffect(() => {
    if (!token || isExpired) navigate("/", { replace: true });
    //eslint-disable-next-line
  }, [token, isExpired]);

  if (isLoading) return <Loading />;

  return (
    <Form.Root>
      {isSuccess && (
        <>
          <Form.Success
            title="Confirmation completed"
            description="Thanks for signing up."
          />
          <p className="text-selago-700  w-full mt-28">
            Access
            <Link
              to="/"
              className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
            >
              {" "}
              now
            </Link>
          </p>
        </>
      )}
      {isError && (
        <>
          {(error as unknown as ApiError)?.error?.message === "Token expired" ||
          (error as unknown as ApiError)?.error?.message === "Invalid token" ? (
            <>
              <Form.Error
                title="Confirmation failed"
                description="The token is not valid"
              />
              <p className="text-selago-700 w-full mt-28">
                Request another
                <button
                  className="text-violet-600 font-semibold hover:text-violet-500 transition-colors ml-1"
                  onClick={() =>
                    navigate("/resend-token", {
                      replace: true,
                      state: {
                        eligible: true,
                      },
                    })
                  }
                >
                  token
                </button>
              </p>
            </>
          ) : (error as unknown as ApiError)?.error?.message ===
            "User already verified" ? (
            <>
              <Form.Error
                title="Confirmation failed"
                description="Your email is already verified"
              />
              <p className="text-selago-700 w-full mt-28">
                Access your account
                <button
                  onClick={() => navigate("/", { replace: true })}
                  className="text-violet-600 ml-1 font-semibold hover:text-violet-500 transition-colors"
                >
                  Login
                </button>
              </p>
            </>
          ) : (
            <>
              <Form.Error
                title="Confirmation failed"
                description="An error has occurred"
              />
              <p className="text-selago-700 w-full mt-28">
                Access your account
                <button
                  onClick={() => navigate("/", { replace: true })}
                  className="text-violet-600 ml-1 font-semibold hover:text-violet-500 transition-colors"
                >
                  Login
                </button>
              </p>
            </>
          )}
        </>
      )}
    </Form.Root>
  );
};
