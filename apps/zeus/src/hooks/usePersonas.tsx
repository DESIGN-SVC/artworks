import { useQuery } from "react-query";

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
