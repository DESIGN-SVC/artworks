import { XCircle } from "phosphor-react";
import { ComponentPropsWithRef, useState, useRef, useEffect } from "react";
import { VideoPlay } from "../../icons";

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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("paused", () => {});
    }
  }, []);

  return (
    <article
      className="hidden justify-center items-center bg-overlay w-full h-full fixed top-0 left-0 z-10 p-[1.125rem]"
      ref={modalRef}
    >
      <div className="relative">
        <video
          className="w-full rounded-[0.875rem] max-h-[38.25rem]"
          controls={isPlaying ? true : false}
          src={src}
          ref={videoRef}
        />
        <button onClick={handlePlay} className={isPlaying ? "hidden" : ""}>
          <VideoPlay className="w-[4.375rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </button>
        <button
          onClick={handleModalClose}
          className="absolute top-0 right-0 mt-8 mr-8"
        >
          <XCircle
            size={40}
            color="#FFF"
            className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      </div>
    </article>
  );
};
