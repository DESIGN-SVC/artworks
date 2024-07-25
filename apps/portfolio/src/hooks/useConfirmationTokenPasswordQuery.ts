import { useQuery } from "@tanstack/react-query";
import { api } from "~/services";

type ConfirmationTokenPassword = {
  token: string;
};
interface ApiError {
  code: number;
  error: {
    code: string;
    message: string;
  };
}

export const useConfirmationTokenPasswordQuery = ({
  token,
}: ConfirmationTokenPassword) => {
  const query = useQuery({
    queryKey: ["confirmationTokenPassword", token],
    queryFn: async () => {
      const { data, error, response } = await api.GET(
        `/users/confirmation/token-password`,
        {
          params: {
            query: {
              token,
            },
          },
        },
      );

      if (response.status === 200) {
        return data;
      }

      throw { error: error as unknown as ApiError, code: response.status };
    },
  });

  return query;
};
