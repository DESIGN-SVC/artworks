import { X } from "@phosphor-icons/react";
import { cx } from "cva";
import { useRef, ComponentPropsWithRef, useEffect } from "react";

type ModalProps = {
  onClose?: () => void;
} & ComponentPropsWithRef<"div">;

export const Overlay = ({ onClose, ...props }: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.target === overlayRef.current && onClose?.();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      onMouseDown={handleClose}
      ref={overlayRef}
      {...props}
    />
  );
};

export const Root = ({
  className,
  ...props
}: ComponentPropsWithRef<"section">) => (
  <section
    className={`flex flex-col relative w-[29.25rem] animate-slideUp ${className}`}
    {...props}
  />
);

export const Portal = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <article
    className={cx([
      "flex flex-col w-full p-[1.875rem] pb-[3.75rem] rounded-2xl rounded-b-none bg-white dark:bg-violet-1000",
      className,
    ])}
    {...props}
  />
);

type TitleProps = {
  label: string;
} & ComponentPropsWithRef<"h3">;

export const Title = ({ label, ...props }: TitleProps) => (
  <h1
    className="mr-auto mb-10 text-[1.375rem]/[43px] font-bold text-selago-950 dark:text-selago-50"
    {...props}
  >
    {label}
  </h1>
);

export const Content = ({
  className,
  ...props
}: ComponentPropsWithRef<"div">) => (
  <div className={`flex flex-col gap-5 ${className}`} {...props} />
);

export const ButtonArea = ({ ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className="flex gap-5 p-5 rounded-b-[0.625rem] border-t border-selago-200 dark:border-violet-900 bg-selago-50 dark:bg-violet-950"
    {...props}
  />
);

type CloseProps = {
  onClick: () => void;
} & ComponentPropsWithRef<"button">;

export const Close = ({ onClick, ...props }: CloseProps) => (
  <button
    className="absolute top-[1.875rem] right-[1.875rem]"
    onClick={onClick}
    {...props}
  >
    <X size={30} className="text-selago-950 dark:text-selago-50" />
  </button>
);
