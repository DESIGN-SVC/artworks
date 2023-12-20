import { cx } from "cva";
import { MouseSimple } from "phosphor-react";

// import { usePersonasQuery } from "~/hooks";
import { ModalVideo } from "~/components";
import { ConcentrixWebhelpLogo, Robot } from "~/icons";
import { BoxInfoPersona } from "~/components";

import adriano1x from "~/assets/personas/adriano-1x.png";
import adriano2x from "~/assets/personas/adriano-2x.png";

import beca1x from "~/assets/personas/beca-1x.png";
import beca2x from "~/assets/personas/beca-2x.png";

import carlos1x from "~/assets/personas/carlos-1x.png";
import carlos2x from "~/assets/personas/carlos-2x.png";

import debora1x from "~/assets/personas/debora-1x.png";
import debora2x from "~/assets/personas/debora-2x.png";

import diego1x from "~/assets/personas/diego-1x.png";
import diego2x from "~/assets/personas/diego-2x.png";

import douglas1x from "~/assets/personas/douglas-1x.png";
import douglas2x from "~/assets/personas/douglas-2x.png";

import edna1x from "~/assets/personas/edna-1x.png";
import edna2x from "~/assets/personas/edna-2x.png";

import enzo1x from "~/assets/personas/enzo-1x.png";
import enzo2x from "~/assets/personas/enzo-2x.png";

import helena1x from "~/assets/personas/helena-1x.png";
import helena2x from "~/assets/personas/helena-2x.png";

import isabel1x from "~/assets/personas/isabel-1x.png";
import isabel2x from "~/assets/personas/isabel-2x.png";

import jorge1x from "~/assets/personas/jorge-1x.png";
import jorge2x from "~/assets/personas/jorge-2x.png";

import lisa1x from "~/assets/personas/lisa-1x.png";
import lisa2x from "~/assets/personas/lisa-2x.png";

import mariana1x from "~/assets/personas/mariana-1x.png";
import mariana2x from "~/assets/personas/mariana-2x.png";

import milena1x from "~/assets/personas/milena-1x.png";
import milena2x from "~/assets/personas/milena-2x.png";

import rodrigo1x from "~/assets/personas/rodrigo-1x.png";
import rodrigo2x from "~/assets/personas/rodrigo-2x.png";

import brazilFlag from "~/assets/brazil-flag.png";
import spanishFlag from "~/assets/spanish-flag.png";

export const HomePage = () => {
  // const { data, isLoading, isError } = usePersonasQuery();
  // if (isLoading) {
  //   return <div>Carregando...</div>;
  // }
  // if (isError) {
  //   return <div>Erro ao carregar personas</div>;
  // }

  const personas = [
    {
      name: "ADRIANO",
      role: "LOCUTOR ESPORTIVO",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: adriano1x,
        srcSet: `${adriano1x} 1x, ${adriano2x} 2x`,
        alt: "Persona Adriano",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "BECA",
      role: "NUTRICIONISTA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: beca1x,
        srcSet: `${beca1x} 1x, ${beca2x} 2x`,
        alt: "Persona Beca",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "DÉBORA",
      role: "ATRIZ",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: debora1x,
        srcSet: `${debora1x} 1x, ${debora2x} 2x`,
        alt: "Persona Debora",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "DIEGO",
      role: "ESCRITOR",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: diego1x,
        srcSet: `${diego1x} 1x, ${diego2x} 2x`,
        alt: "Persona Diego",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "DOUGLAS",
      role: "TELEMARKETING",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: douglas1x,
        srcSet: `${douglas1x} 1x, ${douglas2x} 2x`,
        alt: "Persona Douglas",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "EDNA",
      role: "COZINHEIRA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: edna1x,
        srcSet: `${edna1x} 1x, ${edna2x} 2x`,
        alt: "Persona Edna",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "ENZO",
      role: "YOUTUBER",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: enzo1x,
        srcSet: `${enzo1x} 1x, ${enzo2x} 2x`,
        alt: "Persona Enzo",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "HELENA",
      role: "PROFESSORA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: helena1x,
        srcSet: `${helena1x} 1x, ${helena2x} 2x`,
        alt: "Persona Helena",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "JORGE",
      role: "HUMORISTA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: jorge1x,
        srcSet: `${jorge1x} 1x, ${jorge2x} 2x`,
        alt: "Persona Jorge",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "LISA",
      role: "CABELEREIRA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: lisa1x,
        srcSet: `${lisa1x} 1x, ${lisa2x} 2x`,
        alt: "Persona Lisa",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "MILENA",
      role: "EXECUTIVA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: milena1x,
        srcSet: `${milena1x} 1x, ${milena2x} 2x`,
        alt: "Persona Milena",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "RODRIGO",
      role: "MOTORISTA DE APP",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: rodrigo1x,
        srcSet: `${rodrigo1x} 1x, ${rodrigo2x} 2x`,
        alt: "Persona Rodrigo",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "MARIANA",
      role: "JORNALISTA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: mariana1x,
        srcSet: `${mariana1x} 1x, ${mariana2x} 2x`,
        alt: "Persona Mariana",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "ISABEL",
      role: "PROFESSORA",
      newPersona: true,
      nationality: {
        language: "Brasil",
        flag: {
          src: brazilFlag,
          alt: "Brazil Flag"
        },
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
      img: {
        src: isabel1x,
        srcSet: `${isabel1x} 1x, ${isabel2x} 2x`,
        alt: "Persona Isabel",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
    {
      name: "CARLOS",
      role: "MENSAJERO",
      newPersona: true,
      nationality: {
        language: "Argentina",
        flag: {
          src: spanishFlag,
          alt: "Spanish Flag",
        },
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
      img: {
        src: carlos1x,
        srcSet: `${carlos1x} 1x, ${carlos2x} 2x`,
        alt: "Persona Carlos",
      },
      audioSrc:
        "https://storage.googleapis.com/gs-design-zetflix-static-website/audio-1.mp3",
    },
  ];

  console.log("Home Page"); // teste de deploy vercel
  return (
    <main className="flex-1">
      <Hero
        children={
          <ModalVideo.Root>
            <ModalVideo.Trigger className="animate-scaleInForwardVerticalBottom" />
            <ModalVideo.Content />
          </ModalVideo.Root>
        }
      />
      <BoxInfoPersona.Root personas={personas}>
        <BoxInfoPersona.Description />
        <BoxInfoPersona.Images />
        <BoxInfoPersona.AudioPlayer />
      </BoxInfoPersona.Root>
    </main>
  );
};

const Hero = ({ children }: { children?: React.ReactNode }) => (
  <main className="bg-gradient-to-r from-blue-900 to-blue-1100 w-full">
    <section
      className={cx([
        "flex flex-col items-center relative",
        "w-full min-h-screen px-5 gap-[1.875rem]",
        "lg:grid lg:grid-cols-2 lg:auto-rows-auto lg:gap-0 lg:items-baseline lg:mx-auto lg:max-w-5xl",
        "lg:relative lg:px-28 lg:grid-col-gap-5 lg:row-gap-[1.875rem]",
        "xl:px-60 xl:max-w-7xl ",
      ])}
    >
      <ConcentrixWebhelpLogo
        className={cx([
          "w-full min-h-[6.063rem] py-10 animate-fade",
          "lg:order-1 lg:col-span-2 lg:row-span-1",
        ])}
      />
      <header className="flex flex-col gap-5 font-zen-dots lg:order-2 lg:mt-[4.25rem]">
        <h1 className="flex flex-row gap-2.5 items-center text-blue-500 text-xl animate-slideInLeft">
          ZEUS
          <span
            className={cx([
              "text-blue-800 text-[0.938rem] rounded-md",
              "py-1.5 px-3.5 bg-gradient-to-r from-blue-100 to-blue-350",
            ])}
          >
            PERSONAS
          </span>
        </h1>
        <h2 className="text-white text-center text-[2.375rem] leading-tight lg:text-left lg:text-[3.125rem] animate-slideInRight">
          AGENTE
          <br />
          DIGITAL
          <br />
          DE VOZ
        </h2>
      </header>
      <Robot className="h-full mt-auto lg:order-3 lg:row-span-4 animate-SwingInForwardBottom" />
      {children}
      <h6 className="hidden lg:flex flex-row items-center text-white lg:order-4 gap-2.5 text-sm font-medium">
        <MouseSimple size={32} color="#fafeff" weight="light" />
        Mais Informações
      </h6>
    </section>
  </main>
);

export default HomePage;
