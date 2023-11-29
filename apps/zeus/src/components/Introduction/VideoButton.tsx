import { ComponentPropsWithoutRef, useRef } from "react";
import { PresentationVideo } from ".";
import { CirclePlay } from "../../icons";
import { cx } from "cva";
import * as Dialog from "@radix-ui/react-dialog";

export const VideoButton = ({
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className={cx([
            "flex flex-row items-center w-fit bg-white gap-2.5",
            "text-lg text-cool-gray-950 font-medium rounded-full",
            "absolute bottom-0 mb-10 py-2.5 pl-6 pr-2.5 ",
            "lg:static lg:order-4 lg:my-[3.75rem]",
          ])}
          {...props}
        >
          <p className="w-[12.875rem]">Assistir introdução</p>
          <CirclePlay />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-overlay fixed inset-0" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-screen">
          <div className="relative flex flex-col w-max max-w-[90vw]">
            <PresentationVideo
              src="https://storage.googleapis.com/gs-design-zetflix-static-website/video-1.mp4"
              modalRef={modalRef}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
