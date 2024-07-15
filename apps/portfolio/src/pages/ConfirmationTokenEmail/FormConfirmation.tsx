import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Loading } from "~/components";
import { useConfirmationTokenEmailQuery } from "~/hooks";

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

  useEffect(() => {
    if (!token) navigate("/", { replace: true });
  }, []);

  const { isLoading, isSuccess, isError, error } =
    useConfirmationTokenEmailQuery({
      token: token as string,
    });

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
          {(error as unknown as ApiError)?.error?.message ===
          "Token expired" ? (
            <>
              <Form.Error
                title="Confirmation failed"
                description="The token is not valid"
              />
              <p className="text-selago-700 w-full mt-28">
                Request another
                <Link
                  to="/resend-token"
                  className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
                >
                  {" "}
                  token
                </Link>
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
          ) : null}
        </>
      )}
    </Form.Root>
  );
};
