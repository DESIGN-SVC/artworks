import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { useSession } from "./context/Session/useSession";

type User = {
  name: string;
  team: string;
};

export function useProfileMutation() {
  const { accessToken } = useSession();

  const mutation = useMutation({
    mutationFn: async ({ name, team }: User) => {
      const { data, error, response } = await api.PATCH("/users/profile", {
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
