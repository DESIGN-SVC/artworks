import { useQuery } from "react-query";
import { api } from "~/services";

const getPersonas = async () => {
  const response = await fetch("http://localhost:3000/personas");
  if (!response.ok) {
    throw new Error("Erro ao buscar persona");
  }

  return response.json();
};

export const usePersonas = () => {
  return useQuery("personas", getPersonas);


};

export function usePersonasQuery() {

  const query = useQuery({
    queryFn: async () => {
      const {data, error, response} = await api.GET("/personas",{
        headers: {
          "authorization": `${TOKEN}`,
        },
      });

      if(response.status === 204) return []
      if(data) return data
    }
  });
}