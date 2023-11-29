import { ComponentPropsWithRef, useState, useRef, useEffect } from "react";
import { VideoPlay } from "../../icons";
import * as Dialog from "@radix-ui/react-dialog";
import { XCircle } from "phosphor-react";

interface PresentationVideoProps extends ComponentPropsWithRef<"video"> {
  src: string;
  modalRef: React.RefObject<HTMLDivElement>;
}

export const PresentationVideo = ({ src }: PresentationVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("paused", () => {});
    }
  }, []);

  return (
    <>
      <video
        className="rounded-[1.938rem] max-h-[38.25rem] h-fit w-fit"
        controls={isPlaying ? true : false}
        controlsList="nodownload"
        src={src}
        ref={videoRef}
      />
      <button onClick={handlePlay} className={isPlaying ? "hidden" : ""}>
        <VideoPlay className="w-[4.375rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </button>
      <Dialog.Close asChild>
        <button className="absolute top-0 right-0 mt-8 mr-8">
          <XCircle
            size={40}
            color="#FFF"
            className="rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </button>
      </Dialog.Close>
    </>
  );
};
