import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { ResendTokenEmailFields } from "~/pages/ResendTokenEmail/FormResendTokenEmail";

interface ApiError {
  code: number;
  error: {
    code: string;
    message: string;
  };
}

export function useResendTokenEmailMutation() {
  const mutation = useMutation({
    mutationFn: async ({ email }: ResendTokenEmailFields) => {
      const { data, error, response } = await api.POST("/users/resend-token", {
        body: {
          email,
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
    onError: (error: ApiError) => {
      console.error(error);
    },
  });

  return mutation;
}
