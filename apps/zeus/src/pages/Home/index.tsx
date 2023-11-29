import { cx } from "cva";
import {
  BoxInfoPersona,
  Introduction,
  type BoxInfoPersonaProps,
} from "../../components";
import { usePersonasQuery } from "../../hooks";

export const HomePage = () => {

  return (
    <>
      <Introduction />
      <div
        className={cx([
          "flex flex-col",
          "gap-2.5 w-full min-w-screen min-h-screen h-full bg-gray-300",
        ])}
      >
        {data.map((persona: BoxInfoPersonaProps) => (
          <BoxInfoPersona {...persona} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
