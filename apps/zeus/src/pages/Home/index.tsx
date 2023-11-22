import { cx } from "cva";
import { BoxInfoPersona } from "../../components";
import {
  BrazilFlag,
  PersonaAdriano,
  PersonaBeca,
  PersonaCarlos,
  PersonaDebora,
  PersonaDiego,
  PersonaDouglas,
  PersonaEdna,
  PersonaEnzo,
  PersonaHelena,
  PersonaIsabel,
  PersonaJorge,
  PersonaLisa,
  PersonaMariana,
  PersonaMilena,
  PersonaRodrigo,
  SpanishFlag,
} from "../../icons";

export const HomePage = () => {
  const personas = [
    {
      name: "ADRIANO",
      role: "LOCUTOR ESPORTIVO",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaAdriano />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "BECA",
      role: "NUTRICIONISTA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaBeca />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "DÉBORA",
      role: "ATRIZ",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaDebora />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "DIEGO",
      role: "ESCRITOR",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaDiego />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "DOUGLAS",
      role: "TELEMARKETING",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaDouglas />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "EDNA",
      role: "COZINHEIRA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaEdna />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "ENZO",
      role: "YOUTUBER",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaEnzo />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "HELENA",
      role: "PROFESSORA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaHelena />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "JORGE",
      role: "HUMORISTA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaJorge />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "LISA",
      role: "CABELEREIRA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaLisa />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "MILENA",
      role: "EXECUTIVA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaMilena />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "RODRIGO",
      role: "MOTORISTA DE APP",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaRodrigo />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "MARIANA",
      role: "JORNALISTA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaMariana />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "ISABEL",
      role: "PROFESSORA",
      nationality: {
        name: "Brasil",
        flag: <BrazilFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaIsabel />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "CARLOS",
      role: "MENSAJERO",
      nationality: {
        name: "Argentina",
        flag: <SpanishFlag />,
      },
      attributes: [
        {
          title: "Idade",
          item: [
            {
              text: "Value",
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
      ],
      img: <PersonaCarlos />,
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
  ];

  return (
    <div
      className={cx([
        "flex flex-col",
        "gap-2.5 w-full min-w-screen min-h-screen h-full bg-gray-300",
      ])}
    >
      {personas.map((persona, index) => (
        <BoxInfoPersona {...persona} index={index} />
      ))}
    </div>
  );
};

export default HomePage;
