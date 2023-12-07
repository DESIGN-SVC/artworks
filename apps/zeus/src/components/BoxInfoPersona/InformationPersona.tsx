import { cx } from "cva";
import { Title } from ".";
import { Attribute } from "./Attribute";
import { useEffect, useState } from "react";

interface InformationPersonaProps {
  name: string;
  role: string;
  newPersona: boolean;
  flag: { src: string; alt: string };
  language: string;
  attributes: {
    title: string;
    item: {
      text: string;
    }[];
  }[];
  index: number;
}

export const InformationPersona = ({
  name,
  role,
  newPersona,
  flag,
  language,
  attributes,
  index,
  ...props
}: InformationPersonaProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newIndex = Math.floor(scrollTop / window.innerHeight);

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  return (
    <header
      className={cx([
        "order-1 flex flex-col lg:order-2",
        index === currentIndex ? "animate-text-up" : "",
      ])}
      {...props}
    >
      <Title
        name={name}
        role={role}
        newPersona={newPersona}
        flag={flag}
        language={language}
      />
      <ul className="flex flex-row align-left gap-2.5 pb-5 lg:mb-0">
        {attributes.map(({ title, item }, index) => (
          <Attribute title={title} item={item} key={index} />
        ))}
      </ul>
    </header>
  );
};
