import { useQuery } from "@tanstack/react-query";
import { api } from "~/services";

type ConfirmationTokenEmail = {
  token: string;
};
interface ApiError {
  code: number;
  error: {
    code: string;
    message: string;
  };
}

export const useConfirmationTokenEmailQuery = ({
  token,
}: ConfirmationTokenEmail) => {
  const query = useQuery({
    queryKey: ["confirmationTokenEmail", token],

    queryFn: async () => {
      const { data, error, response } = await api.GET(
        `/users/confirmation-token?token=${token}`,
      );

      if (response.status === 200) {
        return data;
      }

      throw { error: error as unknown as ApiError, code: response.status };
    },
  });

  return query;
};
