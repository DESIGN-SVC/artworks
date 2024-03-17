import { X } from "@phosphor-icons/react";
import { ComponentPropsWithRef } from "react";

export const Overlay = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    {...props}
  />
);

export const Portal = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className="flex flex-col gap-5 w-full max-w-md p-[30px] pb-[60px] rounded-2xl bg-white"
    {...props}
  />
);

type TitleProps = {
  label: string;
} & ComponentPropsWithRef<"h3">;

export const Title = ({ label, ...props }: TitleProps) => (
  <h1 className="text-selago-950 text-[22px] font-bold leading-[43px] mr-auto" {...props}>
    {label}
  </h1>
);

export const Content = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div className="flex flex-col gap-5" {...props} />
);

export const ButtonArea = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div className="flex gap-5" {...props} />
);

export const Close = ({ ...props }: ComponentPropsWithRef<"button">) => (
  <button className="absolute top-5 right-5" {...props}>
    <X size={30} />
  </button>
);

export const Root = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div className="flex flex-col" {...props} />
);
