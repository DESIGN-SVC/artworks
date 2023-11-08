import { cx } from "cva";
import { BoxInfo } from "../../components";
import { PersonaAdriano, PersonaBeca } from "../../icons";

export const HomePage = () => {
  const personas = [
    {
      name: "ADRIANO",
      functions: "LOCUTOR ESPORTIVO",
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
      name: "BECA",
      functions: "NUTRICIONISTA",
      attributes: [
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
              text: "Timbre jovem",
            },
          ],
        },
      ],
      img: <PersonaBeca />,
    }
  ];

  console.log(personas);
  return (
    <div
      className={cx([
        "flex flex-col",
        "gap-2.5 w-screen min-h-screen h-full p-8 bg-gray-50",
        "lg: py-[100px] px-[90px]"
      ])}
    >
      {
      personas.map((persona, index) => (
        <BoxInfo {...persona} index={index} />
      ))
      }

    </div>
  );
};

export default HomePage;
