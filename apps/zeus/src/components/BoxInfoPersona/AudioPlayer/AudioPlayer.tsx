import React, { useEffect, useRef, useState } from "react";
import { cx } from "cva";
import { ProgressBar } from "../..";
import { VolumeMixer } from ".";
import { Pause, Play } from "phosphor-react";
import { usePersonasContext } from "~/hooks";

export const AudioPlayer = () => {
  const personas = usePersonasContext();
  const [personaIndex, setPersonaIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playAudio, setPlayAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
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

  const handleSetIcon = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        return <Play size={28} color="#628295" weight="fill" />;
      } else {
        return <Pause size={28} color="#628295" weight="fill" />;
      }
    }
  };

  const handleDuration = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeConversion = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentIndex(Math.floor(window.scrollY / window.innerHeight) - 1);
      setPersonaIndex(
        currentIndex <= 0
          ? 0
          : currentIndex % personas.length === 0
            ? personas.length - 1
            : currentIndex % personas.length
      );
    }
    if (audioRef.current) {
      window.addEventListener("scroll", handleScroll);
      audioRef.current.addEventListener("loadedmetadata", handleDuration);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleAudioEnded);
      setProgress((currentTime / duration) * 100);
    }
    return () => {
      if (audioRef.current) {
        window.removeEventListener("scroll", handleScroll);
        audioRef.current.removeEventListener("loadedmetadata", handleDuration);
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [currentTime, duration, currentIndex, personas.length]);

  return (
    <div
      className={cx([
        "order-3 md:w-full lg:mt-auto lg:pb-20 w-full relative z-30",
        personaIndex === currentIndex ? "animate-audio-up" : "",
      ])}
    >
      <audio className="hidden" ref={audioRef}>
        <track src={personas[personaIndex].audioSrc} kind="captions" />
        <source src={personas[personaIndex].audioSrc} type="audio/mp3" />
      </audio>
      <div
        className={cx([
          "flex flex-row justify-center w-full",
          "bg-cool-gray-100 rounded-[0.625rem]",
          "gap-5 py-2.5 px-5",
        ])}
      >
        <button
          type="button"
          onClick={handlePausePLay}
          className="pt-[0.563rem]"
        >
          {handleSetIcon()}
        </button>
        <div className="flex flex-col w-full gap-2.5">
          <div className="flex self-end max-w-fit">
            <VolumeMixer audioRef={audioRef} />
          </div>
          <div
            className="w-full h-1.5 bg-gray-200 rounded-[0.625rem] self-center justify-end"
            onClick={handleClick}
          >
            <ProgressBar marker={progress} />
          </div>
          <div className="flex justify-between text-[0.625rem] text-gray-500 font-montserrat">
            <div className="select-none">
              {handleTimeConversion(currentTime)}
            </div>
            <div className="select-none">{handleTimeConversion(duration)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
