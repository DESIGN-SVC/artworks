import { useQuery } from "@tanstack/react-query";
import { useSession } from "./context/Session/useSession";
import { api } from "~/services";

export function useProfileQuery() {
  const { accessToken } = useSession();

  const query = useQuery({
    queryKey: ["profile", accessToken],
    queryFn: async () => {
      const { data, error, response } = await api.GET("/users/profile", {
        headers: { Authorization: `${accessToken}` } as Record<string, string>,
      });
      if (response.status === 201) {
        return data;
      }

      throw { error, code: response.status };
    },
  });

  return query;
}
