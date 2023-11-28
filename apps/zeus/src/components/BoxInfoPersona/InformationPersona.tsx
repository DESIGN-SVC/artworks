import { Title } from ".";
import { Attribute } from "./Attribute";

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
}

export const InformationPersona = ({
  name,
  role,
  newPersona,
  flag,
  language,
  attributes,
  ...props
}: InformationPersonaProps) => (
  <header className="order-1 flex flex-col lg:order-2" {...props}>
    <Title
      name={name}
      role={role}
      newPersona={newPersona}
      flag={flag}
      language={language}
    />
    <ul className="flex flex-row align-left gap-2.5 pb-5 lg:mb-0">
      {attributes.map(({ title, item }) => (
        <Attribute title={title} item={item} />
      ))}
    </ul>
  </header>
);
