import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { useSession } from "./context/Session/useSession";
import { encryptPassword } from "~/utils";

type Password = {
  password: string;
  email: string;
};

export function useResetPasswordMutation() {
  const { accessToken } = useSession();

  const mutation = useMutation({
    mutationFn: async ({ email, password }: Password) => {
      const { data, error, response } = await api.POST(
        "/users/reset-password",
        {
          headers: { Authorization: `${accessToken}` } as Record<
            string,
            string
          >,
          body: {
            password: encryptPassword(password),
            email,
          },
        },
      );

      if (data) return data;

      throw { error, code: response.status };
    },
  });

  return mutation;
}
