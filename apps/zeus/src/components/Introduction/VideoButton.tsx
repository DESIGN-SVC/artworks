import { ComponentPropsWithoutRef, useRef } from "react";
import { PresentationVideo } from ".";
import { CirclePlay } from "../../icons";
import { cx } from "cva";

export const VideoButton = ({
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModal = () => {
    if (modalRef.current) {
      modalRef.current.style.setProperty("display", "flex");
    }
  };

  return (
    <>
      <button
        className={cx([
          "flex flex-row items-center w-fit bg-white gap-2.5",
          "text-lg text-cool-gray-950 font-medium rounded-full",
          "absolute bottom-0 mb-10 py-2.5 pl-6 pr-2.5 ",
          "lg:static lg:order-4 lg:my-[3.75rem]",
        ])}
        onClick={handleModal}
        {...props}
      >
        <p className="w-[12.875rem]">Assistir introdução</p>
        <CirclePlay />
      </button>
      <PresentationVideo
        src="https://storage.googleapis.com/gs-design-zetflix-static-website/video-1.mp4"
        modalRef={modalRef}
      />
    </>
  );
};
