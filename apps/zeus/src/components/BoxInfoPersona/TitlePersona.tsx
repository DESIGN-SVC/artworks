import { cx } from "cva";

export interface TitleProps {
  name: string;
  role: string;
  newPersona: boolean;
  flag: { src: string; alt: string };
  language: string;
}

export const Title = ({
  name,
  role,
  newPersona,
  flag,
  language,
  ...props
}: TitleProps) => (
  <div className="flex flex-col lg:pt-20 gap-1" {...props}>
    <div className="flex flex-row  gap-2.5">
      <h1 className="text-blue-400 font-zen-dots leading-none text-[2.125rem] xl:text-[3.125rem]">
        {name}
      </h1>
      {newPersona && (
        <h4
          className={cx([
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
      {role}
    </h2>
    <div className="flex flex-row gap-2 items-center py-6">
      <img src={flag.src} alt={flag.alt} />
      <h3 className="font-montserrat text-sm text-black">{language}</h3>
    </div>
  </div>
);
