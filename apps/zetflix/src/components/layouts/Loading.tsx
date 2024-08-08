import type { ComponentPropsWithRef } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

type PortalProps = ComponentPropsWithRef<"div"> & { container?: HTMLElement };
const Portal = ({ className, children, container }: PortalProps) =>
  createPortal(
    <div
      className={twMerge(
        "fixed inset-0 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>,
    container ?? (document.getElementById("root") as HTMLElement)
  );

export const Loading = () => (
  <Portal className="z-[100] select-none bg-white/70">
    <p className="text-lg font-bold">Carregando</p>
  </Portal>
);
