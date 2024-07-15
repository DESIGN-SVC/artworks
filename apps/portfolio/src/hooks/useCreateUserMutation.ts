import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";

import { encryptPassword } from "~/utils";

type Password = {
  name: string;
  email: string;
  password: string;
  team: string;
};

export function useCreateUserMutation() {
  const mutation = useMutation({
    mutationFn: async ({ password, ...user }: Password) => {
      const { data, error, response } = await api.POST("/users", {
        body: {
          ...user,
          password: encryptPassword(password),
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
  });

  return mutation;
}
