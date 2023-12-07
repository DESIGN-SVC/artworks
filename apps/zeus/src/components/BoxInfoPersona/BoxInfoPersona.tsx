import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { AudioPlayer, ImagePersona, InformationPersona } from ".";
import { cx } from "cva";

export interface BoxInfoPersonaProps
  extends ComponentPropsWithoutRef<"section"> {
  personas: {
    name: string;
    role: string;
    newPersona: boolean;
    nationality: {
      flag: {
        src: string;
        alt: string;
      };
      language: string;
    };
    attributes: {
      title: string;
      item: {
        text: string;
      }[];
    }[];
    img: {
      src: string;
      srcSet: string;
      alt: string;
    };
    audioSrc: string;
  }[];
}

export const BoxInfoPersona = ({ personas, ...props }: BoxInfoPersonaProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [personaIndex, setPersonaIndex] = useState(0);
  const height = `${personas.length * 100}vh`;

  useEffect(() => {
    const handleScrollPersona = () => {
      const scrollTop = window.scrollY;
      setCurrentIndex(Math.floor(scrollTop / window.innerHeight));

      const personaSetIndex = () => {
        if (currentIndex % personas.length === 0 && currentIndex !== 0) {
          return personas.length - 1;
        }

        return currentIndex % personas.length;
      };

      setPersonaIndex(personaSetIndex);
    };

    window.addEventListener("scroll", handleScrollPersona);
    return () => {
      window.removeEventListener("scroll", handleScrollPersona);
    };
  }, [currentIndex, personaIndex, personas.length]);

  return (
    <div
      style={{ height }}
      className={cx([
        "flex flex-col relative",
        "w-full min-w-screen min-h-screen bg-gray-300 relative",
      ])}
    >
      <section
        className={cx([
          "flex min-h-screen self-center transition-all duration-1000 ease-in-out ",
          "sticky top-0",
          // personaIndex === currentIndex ? "opacity-100 " : "opacity-0",
        ])}
        {...props}
      >
        <div
          className={cx([
            "bg-white rounded-[1.25rem] origin-center",
            "flex flex-col self-center w-full overflow-hidden",
            "lg:grid lg:grid-cols-2 lg:col-gap-[3.125rem] lg:items-baseline",
            "md:gap-x-[3.125rem] md:items-left",
            "m-2.5 md:mx-[1.875rem] md:my-5 xl:mx-[6.25rem] xl:my-10",
            "p-[1.875rem] md:px-[3.75rem] lg:py-0 xl:px-20",
            "md:w-[37.5rem] lg:w-[60.25rem] xl:w-[67.5rem]",
            "max-w-[25.625rem] md:max-w-[37.5rem] lg:max-w-[60.25rem] xl:max-w-[67.5rem]",
            "h-[calc(100vh-1.25rem)] lg:h-[calc(100vh-2.5rem)] xl:h-[calc(100vh-5rem)]",
            "min-h-[49.938rem] lg:min-h-[37.188rem]",
            "max-h-[49.938rem] lg:max-h-[37.188rem]",
          ])}
        >
          <InformationPersona
            name={personas[personaIndex].name}
            role={personas[personaIndex].role}
            newPersona={personas[personaIndex].newPersona}
            flag={personas[personaIndex].nationality.flag}
            language={personas[personaIndex].nationality.language}
            attributes={personas[personaIndex].attributes}
            index={personaIndex}
          />
          <ImagePersona img={personas[personaIndex].img} index={personaIndex} />
         
          <AudioPlayer
            audioSrc={personas[personaIndex].audioSrc}
            index={personaIndex}
          />
        </div>
      </section>
    </div>
  );
};
