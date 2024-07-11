import { Link } from "react-router-dom";
import { Form } from "~/components";

export const FormConfirmation = () => {
  return (
    <Form.Root>
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
    </Form.Root>
  );
};
