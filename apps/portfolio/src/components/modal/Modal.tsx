import { X } from "@phosphor-icons/react";

import { useRef, ComponentPropsWithRef } from "react";

type ModalProps = {
  onClose: () => void;
} & ComponentPropsWithRef<"div">;

export const Overlay = ({ onClose, ...props }: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current) {
      Array.from(overlayRef.current.children).map((child) => {
        if (!child.contains(e.target as Node)) {
          overlayRef.current?.style.setProperty("display", "none");
          if (onClose) {
            onClose();
          }
        }
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      ref={overlayRef}
      onClick={handleClose}
      {...props}
    />
  );
};

export const Root = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div className={`flex flex-col ${className}`} {...props} />
);

export const Portal = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className="flex flex-col w-full p-[30px] pb-[60px] rounded-2xl rounded-b-[0px] bg-white"
    {...props}
  />
);

type TitleProps = {
  label: string;
} & ComponentPropsWithRef<"h3">;

export const Title = ({ label, ...props }: TitleProps) => (
  <h1
    className="text-selago-950 text-[22px] font-bold leading-[43px] mr-auto mb-[40px]"
    {...props}
  >
    {label}
  </h1>
);

export const Content = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div className="flex flex-col gap-5" {...props} />
);

export const ButtonArea = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className="flex gap-5 p-[20px] rounded-b-[10px] bg-selago-50"
    {...props}
  />
);

type CloseProps = {
  onClick: () => void;
} & ComponentPropsWithRef<"button">;

export const Close = ({ onClick, ...props }: CloseProps) => (
  <button onClick={onClick} {...props}>
    <X size={30} />
  </button>
);
