import React from "react";
import { cx } from "cva";
import { BoxInfoPersona, type BoxInfoPersonaProps } from "../../components";
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
    <main
      className={cx([
        "flex flex-col",
        "gap-2.5 w-full min-w-screen min-h-screen h-full bg-gray-300",
      ])}
    >
      {data.map((persona: BoxInfoPersonaProps) => (
        <BoxInfoPersona {...persona} />
      ))}
    </main>
  );
};

export default HomePage;
