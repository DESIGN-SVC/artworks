import { useEffect, useRef, useState } from "react";

import { cx } from "cva";
import * as Dialog from "@radix-ui/react-dialog";
import { XCircle } from "phosphor-react";
import { CirclePlay, VideoPlay } from "~/icons";

export { Root } from "@radix-ui/react-dialog";
export const Content = ({ ...props }: Dialog.DialogContentTypeProps) => {
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
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/20 fixed inset-0 backdrop-blur-sm	data-[state=open]:animate-fade" />
      <Dialog.Content
        className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] min-w-screen "
        {...props}
      >
        <div className="relative flex flex-col w-max max-w-[90vw] animate-fade">
          <video
            className="rounded-[1.938rem] max-h-[38.25rem] h-fit w-fit"
            controls={isPlaying ? true : false}
            controlsList="nodownload"
            src={
              "https://storage.googleapis.com/gs-design-zetflix-static-website/video-1.mp4"
            }
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
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export const Trigger = ({ className,...props }: Dialog.DialogTriggerProps) => (
  <Dialog.Trigger asChild>
    <button
      className={cx([
        "flex flex-row items-center w-fit bg-white gap-2.5",
        "text-lg text-cool-gray-950 font-medium rounded-full",
        "absolute bottom-0 mb-10 py-2.5 pl-6 pr-2.5 ",
        "lg:static lg:order-4 lg:my-[3.75rem]",
        className
      ])}
      {...props}
    >
      <p className="w-[12.875rem]">Assistir introdução</p>
      <CirclePlay />
    </button>
  </Dialog.Trigger>
);
