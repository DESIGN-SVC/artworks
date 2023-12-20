import {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { cx } from "cva";
import { CheckCircle } from "phosphor-react";
import { BackgroundIcons } from "~/components/BoxInfoPersona";

export const PersonaContext = createContext<Persona[]>([]);

interface Persona {
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
}

interface RootProps extends ComponentPropsWithoutRef<"section"> {
  personas: Persona[];
}
export const Root = ({ personas, children }: RootProps) => {
  return (
    <PersonaContext.Provider value={personas}>
      <section
        style={{ height: `${personas.length * 100}vh` }}
        className={cx([
          "flex flex-col relative",
          "w-full min-w-screen min-h-screen bg-gray-300 relative",
        ])}
      >
        <article
          className={cx([
            "flex min-h-screen self-center",
            "sticky top-0 transition-all duration-1000 ease-in-out",
          ])}
        >
          <div
            className={cx([
              "bg-white rounded-[1.25rem] origin-center",
              "flex flex-col overflow-hidden self-center",
              "lg:grid lg:grid-cols-2 lg:col-gap-[3.125rem] lg:items-baseline",
              "md:gap-x-[3.125rem] md:items-left",
              "m-2.5 md:mx-[1.875rem] md:my-5 xl:mx-[6.25rem] xl:my-10",
              "p-[1.875rem] md:px-[3.75rem] lg:py-0 xl:px-20",
              "w-[21.438rem] md:w-[37.5rem] lg:w-[60.25rem] xl:w-[67.5rem]",
              "max-w-[25.625rem] md:max-w-[37.5rem] lg:max-w-[60.25rem] xl:max-w-[67.5rem]",
              "h-[calc(100vh-1.25rem)] md:h-[calc(100vh-2.5rem)] xl:h-[calc(100vh-5rem)]",
              "max-h-[49.938rem] lg:max-h-[37.188rem]",
            ])}
          >
            {children && children}
          </div>
        </article>
      </section>
    </PersonaContext.Provider>
  );
};

export const Description = () => {
  const personas = useContext(PersonaContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [personaIndex, setPersonaIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex(Math.floor(window.scrollY / window.innerHeight) - 1);
      setPersonaIndex(
        currentIndex <= 0
          ? 0
          : currentIndex % personas.length === 0
            ? personas.length - 1
            : currentIndex % personas.length
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, personas.length]);

  return (
    <header
      className={cx([
        "flex flex-col lg:order-2 relative z-20",
        personaIndex === currentIndex
          ? "animate-textDown md:animate-textDownMd"
          : "",
      ])}
    >
      <div className="flex flex-col lg:pt-20 gap-1">
        <div className="flex flex-row gap-2.5">
          <h1 className="max-ml:text-[2rem] text-blue-400 font-zen-dots leading-none text-[2.125rem] xl:text-[3.125rem]">
            {personas[personaIndex].name}
          </h1>
          {personas[personaIndex].newPersona && (
            <h4
              className={cx([
                "max-ml:text-xs",
                "font-montserrat h-fit font-bold text-sm",
                "bg-blue-400 px-3.5 py-2 rounded-[0.625rem]",
                "text-white self-center",
              ])}
            >
              NOVA
            </h4>
          )}
        </div>
        <h2 className="font-zen-dots text-sm text-cool-gray-950 xl:text-lg">
          {personas[personaIndex].role}
        </h2>
        <div className="flex flex-row gap-2 items-center py-6">
          <img
            src={personas[personaIndex].nationality.flag.src}
            alt={personas[personaIndex].nationality.flag.alt}
          />
          <h3 className="font-montserrat text-sm text-black">
            {personas[personaIndex].nationality.language}
          </h3>
        </div>
      </div>
      <ul className="flex flex-row align-left gap-2.5 pb-5 lg:mb-0">
        {personas[personaIndex].attributes.map(({ title, item }, index) => (
          <li
            className={cx([
              "flex flex-row align-left gap-2.5",
              "inline-flex flex-col",
              "bg-cool-gray-100 rounded-[0.3125rem]",
              "w-fit h-fit gap-[0.3125rem] py-[0.5625rem] px-[0.8125rem]",
            ])}
            key={index}
          >
            <h4 className="text-xs font-semibold text-cool-gray-800">
              {title}
            </h4>
            <h5 className="flex flex-wrap justify-left gap-1.5">
              {item.map(({ text }, index) => (
                <div
                  className={cx([
                    "flex flex-row items-center",
                    "bg-white rounded ",
                    "p-2.5 gap-1.5 w-fit",
                  ])}
                  key={index}
                >
                  <CheckCircle size={12} color="#323E48" weight="bold" />
                  <p className="text-xs text-cool-gray-900">{text}</p>
                </div>
              ))}
            </h5>
          </li>
        ))}
      </ul>
    </header>
  );
};

export const Images = () => {
  const personas = useContext(PersonaContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [personaIndex, setPersonaIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex(Math.floor(window.scrollY / window.innerHeight) - 1);
      setPersonaIndex(
        currentIndex <= 0
          ? 0
          : currentIndex % personas.length === 0
            ? personas.length - 1
            : currentIndex % personas.length
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, personas.length]);
  return (
    <div
      className={cx([
        "mt-auto h-auto relative self-center",
        "md:w-auto lg:h-full",
        "lg:order-1 lg:pt-20",
        "lg:row-span-2",
      ])}
    >
      {personas.map(({ img }, index) => (
        <img
          src={img.src}
          srcSet={img.srcSet}
          alt={img.alt}
          className={cx([
            "max-md:w-auto max-ml:h-[290px]",
            "relative z-20 lg:h-full",
            index === personaIndex ? "animate-persona" : "hidden",
          ])}
          key={index}
        />
      ))}
      <BackgroundIcons index={personaIndex} />
    </div>
  );
};
