import { ComponentPropsWithRef } from "react";
import { AudioPlayer } from "..";
import { cx } from "cva";
import { ImagePersona, InformationPersona } from ".";

export interface BoxInfoPersonaProps extends ComponentPropsWithRef<"section"> {
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

export const BoxInfoPersona = ({
  name,
  role,
  newPersona,
  nationality,
  attributes,
  img,
  audioSrc,
  ...props
}: BoxInfoPersonaProps) => (
  <section className="flex min-h-screen self-center" {...props}>
    <div
      className={cx([
        "bg-white rounded-[1.25rem] ",
        "flex flex-col self-center w-full",
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
        name={name}
        role={role}
        newPersona={newPersona}
        flag={nationality.flag}
        language={nationality.language}
        attributes={attributes}
      />
      <ImagePersona
        img={img}
      />
      <AudioPlayer audioSrc={audioSrc} />
    </div>
  </section>
);
