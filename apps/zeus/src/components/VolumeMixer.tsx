import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Speaker } from "../icons";
import * as Progress from "@radix-ui/react-progress";
import { cx } from "cva";

interface VolumeMixerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const VolumeMixer = ({ audioRef }: VolumeMixerProps) => {
  const volumeMixerRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState<number>(20);

  const handleVolumeChange = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      const newVolume = audioRef.current.volume * 100;
      setVolume(newVolume);
    }
  };

  // const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (audioRef.current) {
  //     const progressBar = e.currentTarget;
  //     const progressBarRect = progressBar.getBoundingClientRect();
  //     const clickX = e.clientX - progressBarRect.left;
  //     const progressBarWidth = progressBar.clientWidth;
  //     const newProgress = (clickX / progressBarWidth) * 100;

  //     if (newProgress >= 0 && newProgress <= 100) {
  //       setProgress(newProgress);
  //       const newTime = (newProgress / 100) * audioRef.current.duration;
  //       audioRef.current.currentTime = newTime;
  //       if (!playAudio) {
  //         audioRef.current.play();
  //         setPlayAudio(true);
  //       }
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
  //     audioRef.current.addEventListener("ended", handleAudioEnded);
  //     const total = audioRef.current.duration;
  //     setProgress((currentTime / total) * 100);
  //   }
  // }, [currentTime]);

  return (
    <div className="w-full h-fit">
      <div
        className={cx([
          "flex flex-row justify-center",
          "min-w-[15rem] w-full",
          "bg-cool-gray-50 rounded-[2.5rem] gap-2.5",
        ])}
      >
        <button type="button">
          <Speaker className="w-[1.063rem]" />
        </button>
        <div
          className="w-full h-1 bg-gray-200 rounded-[0.625rem] self-center"
          onClick={handleVolumeChange}
        >
          <Progress.Root
            className="relative overflow-hidden bg-gray-200 rounded-full w-full h-3 cursor-pointer"
            value={volume}
          >
            <Progress.Indicator
              className="bg-blue-300 w-full h-full"
              style={{
                transition: "transform 300ms cubic-bezier(0.65, 0, 0.35, 1)",
                transform: `translateX(-${100 - volume}%)`,
              }}
            />
          </Progress.Root>
        </div>
      </div>
    </div>
  );
};
