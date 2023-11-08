import React from "react";
import { Attribute } from ".";
import { BrazilFlag, PersonaAdriano } from "../icons";
import { AtributteProps } from "./Attribute";
import { cx } from "cva";

export interface BoxInfoProps {
  name: string;
  functions: string;
  attributes: AtributteProps[];
  img: React.ReactNode;
  index?: number;
}

export const BoxInfo = ({
  name,
  functions,
  attributes,
  img,
  ...props
}: BoxInfoProps) => (
  <div
    className={cx([
      "flex flex-col justify-left",
      "bg-white p-[1.563rem] rounded-[1.25rem]",
      "lg:flex-row-reverse justify-center pt-[6.438rem] px-[81px] max-w-[1100px] self-center",
    ])}
    key={props.index}
  >
    <div className={cx([
    "flex flex-col gap-[30px]",
    "lg:gap-10 max-w-[427px]",
    ])}
    >
    

      <div className="">
        <h1 className=" text-blue-350 text-5xl font-zen-dots">{name}</h1>
        <div className=" flex flex-row flex-wrap gap-2 font-zen-dots ">
          <h2 className="text-lg text-black">{functions}</h2>
          <BrazilFlag />
        </div>
      </div>

      <div className="flex flex-wrap align-left gap-2.5">
        {attributes.map((item, index) => (
          <Attribute title={item.title} item={item.item} index={index} />
        ))}
      </div>
    </div>
    <div className={cx([
      "w-full h-full", 
      "lg: w-[538px]"
      ])}
    >
      {img}
      </div>

    {/* <AudioPlayer src="" /> */}
  </div>
);
