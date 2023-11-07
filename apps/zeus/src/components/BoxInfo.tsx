import React from "react";
import { Attribute } from ".";
import { BrazilFlag, PersonaAdriano } from "../icons";
import { AtributteProps } from "./Attribute";

interface BoxInfoProps {
  name: string;
  functions: string;
  attributes: AtributteProps[];
  img: React.ReactNode;
}

export const BoxInfo = (personas: BoxInfoProps[]) => {
  return personas.map((persona) => (
    <div className="flex flex-col justify-left bg-white p-[1.563rem] rounded-[1.25rem]">
      <h1 className=" text-blue-350 text-5xl font-zen-dots">Adriano</h1>
      <div className=" flex flex-row flex-wrap gap-2 font-zen-dots ">
        <h2 className="text-lg text-black">LOCUTOR ESPORTIVO</h2>
        <BrazilFlag />
      </div>

      <div className="flex flex-wrap align-left gap-2.5">
        {persona.attributes.map((item, index) => (
          <Attribute title={item.title} item={item.item} index={index} />
        ))}
      </div>
      <PersonaAdriano />
      {/* <AudioPlayer src="" /> */}
    </div>
  ));
};
