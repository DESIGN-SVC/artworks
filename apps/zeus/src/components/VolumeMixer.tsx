import React, { useEffect, useRef, useState } from "react";
import { SpeakerHigh, SpeakerLow } from "../icons";
import { cx } from "cva";
import { ProgressBar } from ".";

interface VolumeMixerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const VolumeMixer = ({ audioRef }: VolumeMixerProps) => {
  const volumeMixerRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState<number>(21);
  const [currentVolume, setCurrentVolume] = useState<number>(21);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const progressBarRect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - progressBarRect.left;
      const progressBarWidth = progressBar.clientWidth;
      const newVolume = (clickX / progressBarWidth) * 100;
      if (newVolume >= 0 && newVolume <= 100) {
        setVolume(newVolume);
        setCurrentVolume(newVolume);
      }
    }
  };

  const handleMuteVolume = () => {
    if (audioRef.current) {
      if (audioRef.current.volume !== 0) {
        setVolume(0);
      } else {
        setVolume(currentVolume);
      }
    }
  };

  const handleSetIcon = () => {
    if (audioRef.current) {
      if (volume >= 0 && volume <= 20) {
        return <SpeakerLow className="w-4" />;
      } else {
        return <SpeakerHigh className="w-4" />;
      }
    }
  };

  useEffect(() => {
    const handleVolumeChange = () => {
      if (audioRef.current) {
        audioRef.current.volume = volume / 100;
      }
    };
    if (audioRef.current) {
      audioRef.current.addEventListener("volumechange", handleVolumeChange);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener(
          "volumechange",
          handleVolumeChange
        );
      }
    };
  }, [volume, audioRef, currentVolume]);

  return (
    <div className="w-full h-fit" ref={volumeMixerRef}>
      <div
        className={cx([
          "flex flex-row justify-center",
          "min-w-[6.313rem] w-full",
          "gap-2.5",
        ])}
      >
        <button onClick={handleMuteVolume}>{handleSetIcon()}</button>
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
