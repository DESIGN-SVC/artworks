import { useQuery } from "react-query";
import { api } from "~/services";

export function usePersonasQuery() {
  const query = useQuery({
    queryFn: async () => {
      const { data, error } = await api.GET("/personas", {});

      if (error) return error;
      if (data) return data;
      
    },
  });
  const personas = Array.isArray(query.data) ? query.data : [];
  return { ...query, data: personas };
}
