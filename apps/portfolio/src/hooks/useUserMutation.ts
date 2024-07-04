import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { useSession } from "./context/Session/useSession";

type User = {
  name: string;
  team: string;
};

export function useUserMutation() {
  const { accessToken } = useSession();

  const mutation = useMutation({
    mutationFn: async ({ name, team }: User) => {
      const { data, error, response } = await api.PUT("/users/profile", {
        headers: { Authorization: `${accessToken}` } as Record<string, string>,
        body: {
          name,
          team,
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
  });

  return mutation;
}
