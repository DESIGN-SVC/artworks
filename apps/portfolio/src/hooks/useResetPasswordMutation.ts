import { useMutation } from "@tanstack/react-query";
import { PasswordResetFields } from "~/pages/PasswordReset/PasswordResetForm";

import { api } from "~/services";

interface ApiError {
  code: number;
  error: {
    error: string;
    message: string;
  };
}

export function useResetPasswordMutation() {
  const mutation = useMutation({
    mutationFn: async ({ email }: PasswordResetFields) => {
      const { data, error, response } = await api.POST(
        "/users/reset-password",
        {
          body: {
            email,
          },
        },
      );

      if (data) return data;

      throw { error, code: response.status };
    },
    onError: (error: ApiError) => {
      console.error(error);
    },
  });

  return mutation;
}
