import { cx } from "cva";
import { BoxInfo } from "../../components";
import { PersonaAdriano } from "../../icons";

export const HomePage = () => {
  const personas = [
    {
      name: "Adriano",
      functions: "Locutor esportivo",
      attributes: [
        {
          title: "Frases",
          item: [
            {
              text: "Até mais!",
            },
          ],
        },
        {
          title: "Especialidade",
          item: [
            {
              text: "Cobranças",
            },
          ],
        },
        {
          title: "Atendimento",
          item: [
            {
              text: "Diversos públicos",
            },
          ],
        },
        {
          title: "Características vocais",
          item: [
            {
              text: "Timbre maduro",
            },
          ],
        },
      ],
      img: <PersonaAdriano />,
    },
    {
      name: "Adriano",
      functions: "Locutor esportivo",
      attributes: [
        {
          title: "Frases",
          item: [
            {
              text: "Até mais!",
            },
          ],
        },
        {
          title: "Especialidade",
          item: [
            {
              text: "Cobranças",
            },
          ],
        },
        {
          title: "Atendimento",
          item: [
            {
              text: "Diversos públicos",
            },
          ],
        },
        {
          title: "Características vocais",
          item: [
            {
              text: "Timbre maduro",
            },
          ],
        },
      ],
      img: <PersonaAdriano />,
    }
  ];


  return (
    <div
      className={cx([
        "flex flex-col",
        "gap-2.5 w-screen min-h-screen h-full p-8 bg-gray-150",
      ])}
    >
      <BoxInfo personas={personas} />
    </div>
  );
};

export default HomePage;
