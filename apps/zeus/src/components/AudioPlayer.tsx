import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "../icons";
import * as Progress from "@radix-ui/react-progress";
import { cx } from "cva";

interface AudioPlayerProps {
  AudioSrc: string;
}

export const AudioPlayer = ({ AudioSrc }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playAudio, setPlayAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setPlayAudio(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const progressBarRect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - progressBarRect.left;
      const progressBarWidth = progressBar.clientWidth;
      const newProgress = (clickX / progressBarWidth) * 100;

      if (newProgress >= 0 && newProgress <= 100) {
        setProgress(newProgress);
        const newTime = (newProgress / 100) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        if (!playAudio) {
          audioRef.current.play();
          setPlayAudio(true);
        }
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleAudioEnded);
      const total = audioRef.current.duration;
      setProgress((currentTime / total) * 100);
    }
  });

  return (
    <div className="w-full h-fit">
      <audio className="hidden" ref={audioRef}>
        <source src={AudioSrc} type="audio/mpeg" />
      </audio>
      <div
        className={cx([
          "flex flex-row justify-center",
          "min-w-[15rem] w-full",
          "bg-cool-gray-50 rounded-[2.5rem] gap-2.5 p-3 pr-5",
        ])}
      >
        <button
          type="button"
          onClick={() => {
            playAudio ? audioRef.current?.pause() : audioRef.current?.play();
            setPlayAudio(!playAudio);
          }}
        >
          {playAudio ? (
            <Pause className="w-[1.063rem]" />
          ) : (
            <Play className="w-[1.063rem]" />
          )}
        </button>
        <div
          className="w-full h-3 bg-gray-200 rounded-[0.625rem] self-center"
          onClick={handleClick}
        >
          <Progress.Root
            className="relative overflow-hidden bg-gray-200 rounded-full w-full h-full cursor-pointer"
            value={progress}
          >
            <Progress.Indicator
              className="bg-blue-300 w-full h-full"
              style={{
                transition: "transform 300ms cubic-bezier(0.65, 0, 0.35, 1)",
                transform: `translateX(-${100 - progress}%)`,
              }}
            />
          </Progress.Root>
        </div>
      </div>
    </div>
  );
};
