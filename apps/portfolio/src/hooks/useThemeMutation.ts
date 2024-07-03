import { useMutation } from "@tanstack/react-query";

import { api } from "~/services";
import { useSession } from "./context/Session/useSession";

type Theme = {
  theme: "light" | "dark";
};

export function useThemeMutation() {
  const { accessToken } = useSession();

  const mutation = useMutation({
    mutationFn: async ({ theme }: Theme) => {
      const { data, error, response } = await api.PUT("/users/theme", {
        headers: { Authorization: `${accessToken}` } as Record<string, string>,
        body: {
          theme,
        },
      });

      if (data) return data;

      throw { error, code: response.status };
    },
  });

  return mutation;
}
