import { Play, XCircle } from "phosphor-react";
import { ComponentPropsWithRef, useState, useRef, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface PresentationVideoProps extends ComponentPropsWithRef<"video"> {
  src: string;
  modalRef: React.RefObject<HTMLDivElement>;
}

export const PresentationVideo = ({
  src,
  modalRef,
}: PresentationVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleModalClose = () => {
    if (modalRef.current) {
      videoRef.current?.pause();
      modalRef.current.style.setProperty("display", "none");
    }
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleModalClose();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("paused", () => {});
    }
  }, []);

  return (
    <div
      className="hidden items-center bg-overlay w-full h-full fixed top-0 left-0 z-10 p-[18px]"
      ref={modalRef}
    >
      <div className="relative">
        <video
          className="w-full rounded-[14px]"
          controls={isPlaying ? true : false}
          src={src}
          ref={videoRef}
        />
        <button onClick={handlePlay} className={isPlaying ? "hidden" : ""}>
          <Play
            size={61}
            color="#414141"
            weight="fill"
            className="bg-white w-auto h-[111px] rounded-full p-[25px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </button>
        <button
          onClick={handleModalClose}
          className="absolute top-0 right-0 mt-[32px] mr-[32px]"
        >
          <XCircle
            size={40}
            color="#FFF"
            className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      </div>
    </div>
  );
};
