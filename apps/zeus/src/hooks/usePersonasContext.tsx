import { useContext } from "react";
import { PersonaContext } from "~/components/BoxInfoPersona/BoxInfoPersona";

export const usePersonasContext = () => {
  return useContext(PersonaContext);
};