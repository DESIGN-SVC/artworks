import { BoxInfoPersona, Introduction } from "../../components";
import { usePersonasQuery } from "../../hooks";

export const HomePage = () => {
  const { data, isLoading, isError } = usePersonasQuery();

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  if (isError) {
    return <div>Erro ao carregar personas</div>;
  }

  return (
    <>
      <Introduction />
      <BoxInfoPersona personas={data} />
    </>
  );
};

export default HomePage;
