import { useMutation } from "@tanstack/react-query";

import { useSession } from "./context/Session/useSession";
import { api } from "~/services";

export function useDeleteAvatarMutation() {
  const { accessToken } = useSession();

  const mutation = useMutation({
    mutationFn: async () => {
      const { data, error, response } = await api.DELETE("/users/avatar", {
        headers: { Authorization: `${accessToken}` } as Record<string, string>,
      });

      if (data) return data;

      throw { error, code: response.status };
    },
  });

  return mutation;
}
