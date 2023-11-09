import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "../icons";
import { cx } from "cva";
import { ProgressBar, VolumeMixer } from ".";

interface AudioPlayerProps {
  audioSrc: string;
}

export const AudioPlayer = ({ audioSrc }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playAudio, setPlayAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setCurrentTime(currentTime);
    }
  };

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
      setPlayAudio(false);
    }
  };

  const handlePausePLay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setPlayAudio(!playAudio);
    }
  };

  const handleIcon = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        return <Play className="w-[1.063rem]" />;
      } else {
        return <Pause className="w-[1.063rem]" />;
      }
    }
  };

  const handleTime = (time: number) => {
    if (audioRef.current) {
      if (Number.isNaN(time)) {
        return "00:00";
      } else {
        return formatTime(time);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}`;
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
      setDuration(audioRef.current.duration);
      setProgress((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  return (
    <div className="w-full">
      <audio className="hidden" ref={audioRef}>
        <track src={audioSrc} kind="captions" />
        <source src={audioSrc} type="audio/mp3" />
      </audio>
      <div
        className={cx([
          "flex flex-row justify-center",
          "min-w-[15rem] w-full",
          "bg-cool-gray-50 rounded-[2.5rem] gap-2.5 p-3 pr-5",
        ])}
      >
        <button type="button" onClick={handlePausePLay}>
          {handleIcon()}
        </button>
        <div className="flex flex-col w-full">
          <div className="flex self-end max-w-fit">
            <VolumeMixer audioRef={audioRef} />
          </div>
          <div
            className="w-full h-3 bg-gray-200 rounded-[0.625rem] self-center justify-end"
            onClick={handleClick}
          >
            <ProgressBar marker={progress} />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <div className="">{handleTime(currentTime)}</div>
            <div className="">{handleTime(duration)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
