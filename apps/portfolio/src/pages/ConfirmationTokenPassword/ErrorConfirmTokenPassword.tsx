import { useNavigate } from "react-router-dom";
import { Button, Form, FormPageContainer } from "~/components";

interface ErrorConfirmTokenPasswordProps {
  title: string;
  description: string;
}
export const ConfirmationTokenPasswordForm = ({
  title,
  description,
}: ErrorConfirmTokenPasswordProps) => {
  const navigate = useNavigate();
  return (
    <FormPageContainer type="dark">
      <Form.Root>
        <Form.Error title={title} description={description} />
        <Button onClick={() => navigate("/password/reset", { replace: true })}>
          request again
        </Button>
      </Form.Root>
    </FormPageContainer>
  );
};
