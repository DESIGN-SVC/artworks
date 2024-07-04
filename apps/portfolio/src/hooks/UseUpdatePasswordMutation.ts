import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { useSession } from "./context/Session/useSession";

type Password = {
  password: string;
  oldPassword: string;
};

export function useUpdatePasswordMutation() {
  const { accessToken } = useSession();

  const mutation = useMutation({
    mutationFn: async ({ oldPassword, password }: Password) => {
      const { data, error, response } = await api.PUT("/users/password", {
        headers: { Authorization: `${accessToken}` } as Record<string, string>,
        body: {
          password,
          oldPassword,
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
  });

  return mutation;
}
