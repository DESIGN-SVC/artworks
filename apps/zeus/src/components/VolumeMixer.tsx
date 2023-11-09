import React, { useEffect, useRef, useState } from "react";
import { Speaker } from "../icons";
import { cx } from "cva";
import { ProgressBar } from ".";

interface VolumeMixerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const VolumeMixer = ({ audioRef }: VolumeMixerProps) => {
  const volumeMixerRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(20);

  const handleVolumeChange = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const progressBarRect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - progressBarRect.left;
      const progressBarWidth = progressBar.clientWidth;
      const newVolume = (clickX / progressBarWidth) * 100;
      if (newVolume >= 0 && newVolume <= 100) {
        setVolume(newVolume);
      }
    }
  };

  useEffect(() => {
    handleVolumeChange();
    if (audioRef.current) {
      audioRef.current.addEventListener("volumechange", handleVolumeChange);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("volumechange", handleVolumeChange);
      }
    };
  }, [volume, audioRef]);

  return (
    <div className="w-full h-fit" ref={volumeMixerRef}>
      <div
        className={cx([
          "flex flex-row justify-center",
          "min-w-[10rem] w-full",
          "bg-cool-gray-50 rounded-[2.5rem] gap-2.5",
        ])}
      >
        <Speaker className="w-[1.063rem] h-6" />

        <div
          className="w-full h-1 bg-gray-200 rounded-[0.625rem] self-center"
          onClick={handleClick}
        >
          <ProgressBar marker={volume} />
        </div>
      </div>
    </div>
  );
};
