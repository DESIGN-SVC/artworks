import React from "react";
import { Attribute, AudioPlayer } from ".";
import { AtributteProps } from "./Attribute";
import { cx } from "cva";

export interface BoxInfoPersonaProps {
  name: string;
  role: string;
  nationality: LanguageProps;
  attributes: AtributteProps[];
  img: React.ReactNode;
  audioSrc: string;
  index?: number;
}

interface LanguageProps {
  name: string;
  flag: React.ReactNode;
}

export const BoxInfoPersona = ({
  name,
  role,
  nationality,
  attributes,
  img,
  audioSrc,
  ...props
}: BoxInfoPersonaProps) => (
  <div className="flex min-h-screen self-center">
    <div
      className={cx([
        "bg-white rounded-[1.25rem] ",
        "flex flex-col self-center w-full",
        "lg:grid lg:grid-cols-2 lg:col-gap-[3.125rem] lg:items-baseline",
        "md:gap-x-[3.125rem] md:items-center",
        "m-2.5 md:mx-[1.875rem] md:my-5 xl:mx-[6.25rem] xl:my-10",
        "p-[1.875rem] md:px-[3.75rem] lg:py-0 xl:px-20",
        "md:w-[37.5rem] lg:w-[60.25rem] xl:w-[67.5rem]",
        "max-w-[25.625rem] md:max-w-[37.5rem] lg:max-w-[60.25rem] xl:max-w-[67.5rem]",
        "h-[calc(100vh-1.25rem)] lg:h-[calc(100vh-2.5rem)] xl:h-[calc(100vh-5rem)]",
        "min-h-[49.938rem] lg:min-h-[37.188rem]",
        "max-h-[49.938rem] lg:max-h-[37.188rem]",
      ])}
      key={props.index}
    >
      <div className="order-1 flex flex-col lg:order-2 ">
        <div className="flex flex-col lg:pt-20">
          <div className="flex flex-row  gap-2.5">
            <h1 className="text-blue-400 font-zen-dots leading-none text-[2.125rem] xl:text-[3.125rem]">
              {name}
            </h1>
            <h4
              className={cx([
                "font-montserrat h-fit font-bold text-sm",
                "bg-blue-400 px-3.5 py-2 rounded-[0.625rem]",
                "text-white self-center",
              ])}
            >
              NOVA
            </h4>
          </div>
          <div className="flex flex-row flex-wrap gap-2 font-zen-dots">
            <h2 className="text-sm text-cool-gray-950 xl:text-lg">{role}</h2>
          </div>
          <div className="flex flex-row gap-2 items-center py-6">
            {nationality.flag}
            <h3 className="font-montserrat text-sm text-black">
              {nationality.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-row align-left gap-2.5 pb-5 lg:mb-0">
          {attributes.map((item, index) => (
            <Attribute title={item.title} item={item.item} index={index} />
          ))}
        </div>
      </div>

      <div
        className={cx([
          "flex order-2 w-full mt-auto",
          "md:w-auto",
          "lg:order-1 lg:relative",
          "lg:row-span-2 lg:col-span-1 lg:h-full",
        ])}
      >
        {React.cloneElement(img as React.ReactElement, {
          className: "lg:absolute lg:bottom-0 lg:h-full lg:pt-20 lg:w-auto",
        })}
      </div>
      <div className="order-3 md:w-full lg:mt-auto lg:pb-20">
        <AudioPlayer audioSrc={audioSrc} />
      </div>
    </div>
  </div>
);
