import { cx } from "cva";
import { BoxInfoPersona } from "../../components";
import { usePersonas } from "../../hooks";
import { BoxInfoPersonaProps } from "src/components/BoxInfoPersona/BoxInfoPersona";

export const HomePage = () => {
  const { data, isLoading, isError } = usePersonas();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
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
