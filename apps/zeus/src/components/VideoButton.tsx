import { useRef } from "react";
import { PresentationVideo } from ".";
import { CirclePlay } from "../icons";

export const VideoButton = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModal = () => {
    if (modalRef.current) {
      modalRef.current.style.setProperty("display", "flex");
    }
  };

  return (
    <>
      <button
        className="flex flex-row  gap-[10px] absolute bottom-0 bg-white text-black font-bold py-[10px] pl-[24px] rounded-full"
        onClick={handleModal}
      >
        Assistir introdução
        <CirclePlay />
      </button>
      <PresentationVideo
        src="https://storage.googleapis.com/gs-design-zetflix-static-website/video-1.mp4"
        modalRef={modalRef}
      />
    </>
  );
};
