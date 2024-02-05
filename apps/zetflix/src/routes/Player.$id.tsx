import {
DownloadSimple,
FileArrowDown,
FileAudio,
MonitorPlay,
Pause,
Play,
ShareFat,
SpeakerHigh,
SpeakerX,
} from "@phosphor-icons/react";
import * as Slider from "@radix-ui/react-slider";
import { cva,cx } from "cva";
import React,{ useEffect,useRef,useState } from "react";
import {
Link,
LoaderFunctionArgs,
json,
redirect,
useLoaderData,
} from "react-router-dom";
import { Button,Toast,ToastDescription } from "../components/ui";
import { apiVideos } from "../services/api";

export async function loader({ params }: LoaderFunctionArgs) {
  const video = Object.values(params).at(0);
  const token = await localStorage.getItem("token");

  if (!token) {
    return redirect("/");
  }

  const filteredVideo = apiVideos.filter(({ id }) => id === Number(video));
  return json({ filteredVideo });
}

export const Player = () => {
  const { filteredVideo }: any = useLoaderData();
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [playAudio, setPlayAudio] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [volume, setVolume] = useState(100);
  const [previousVolume, setPreviousVolume] = useState(volume);
  const [showToast, setShowToast] = useState<ToastDescription>({
    title: "",
    icon: undefined,
    open: false,
  });
  const [shareSupport, setShareSupport] = useState<boolean | null>(null);

  const audioPlay = () => {
    if (audioRef.current) {
      if (playAudio) {
        audioRef.current.pause();
      } else {
        videoRef.current?.pause();
        audioRef.current.play();
      }
      setPlayAudio(!playAudio);
    }
  };
  const videoPlay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayAudio(false);
    }
  };
  const videoPlayBtn = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
      setPlayVideo(!playVideo);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayAudio(false);
    }
  };
  const showRangeProgress = (range: number) => {
    if (audioRef.current) {
      setTotalTime(audioRef.current.duration);
      if (range >= 100) {
        audioRef.current.currentTime = audioRef.current.duration;
      } else {
        audioRef.current.currentTime =
          (range / 100) * audioRef.current.duration;
      }
    }
  };
  const checkShareSupport = () => {
   const share =  window.navigator

    if (share) {
      setShareSupport(true);
    } else {
      setShareSupport(false);
    }
  };
  useEffect(() => {
    checkShareSupport();
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleAudioEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setProgress(currentTime);
    }
  };
  const handleAudioEnded = () => {
    setPlayAudio(false);
  };
  const convertTimeToMinutes = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  };

  const handleVolumeChange = (volume: number) => {
    if (audioRef.current) {
      const totalVolume = (audioRef.current.volume = volume / 100);
      setVolume(totalVolume * 100);
      setPreviousVolume(volume);
    }
  };
  const handleMuted = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      if (audioRef.current.muted) {
        setVolume(0);
      } else {
        setVolume(previousVolume);
      }
    }
  };

  const handleShared = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: filteredVideo[0].title,
          text: "Fala ParZéiro, seja bem vindo ao Zé Te Informa, nosso local de dicas e comunicação direta com nossos ParZéiros. ",
          url: window.location.href,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  function download(url: string, file: string) {
    const videoUrl = url;
    const fileName = file;

    fetch(videoUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowToast({
          title: "Download iniciado",
          icon: <DownloadSimple />,
          open: true,
        });
      });
  }

  const style = {
    btnDownload: cva(
      [
        "z-10 flex items-center gap-3 px-5 py-2 font-medium text-yellow-100 transition-all duration-500 ",
        "hover:bg-yellow-100 hover:text-gray-900",
        "md:py-[0.625rem] md:text-xl",
      ],
      {
        variants: {
          order: {
            first: "rounded-t-[0.625rem]",
            last: "rounded-b-[0.625rem]",
          },
        },
      }
    ),
  };
  return (
    <main className="flex-1 bg-white">
      <section className="flex flex-col items-center gap-8 px-2 pt-6">
        <div
          className={`relative flex justify-center overflow-hidden px-4
                      before:absolute before:inset-0 before:mx-4 before:rounded-[1.25rem] before:bg-[linear-gradient(180deg,rgba(0,0,0,0.13)_0%,rgba(0,0,0,0.79)_100%)] before:content-['']
                      ${playVideo ? "before:hidden" : "before:visible"}`}
        >
          <video
            ref={videoRef}
            src={filteredVideo[0].video}
            muted
            controls={playVideo}
            controlsList="nodownload"
            className={`w-full  rounded-[1.25rem] xl:max-h-[51.75rem]`}
            poster={filteredVideo[0].thumbnail}
            onClick={videoPlay}
          />
          <button
            onClick={videoPlayBtn}
            className={`${
              playVideo ? "hidden" : "flex"
            } absolute left-1/2 top-1/2 h-[7.5rem] w-[7.5rem] -translate-x-[50%] translate-y-[-50%] items-center justify-center rounded-full bg-yellow-100 text-gray-900`}
          >
            <Play size={50} weight="fill" />
          </button>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {shareSupport ? (
            <Button
              onClick={handleShared}
              className="flex h-10 max-w-[10.625rem] flex-none items-center gap-3 px-5 text-base md:h-12 md:max-w-[13.625rem] md:text-xl"
            >
              Compartilhar <ShareFat size={24} className="flex-none" />
            </Button>
          ) : null}
          <div className="relative">
            <input
              ref={inputRef}
              id="download"
              type="checkbox"
              hidden
              className="peer"
            />
            <Button
              asChild
              className="flex h-10 max-w-[9.25rem] flex-none cursor-pointer items-center gap-3 px-5 text-base md:h-12 md:max-w-[11.875rem] md:text-xl"
            >
              <label htmlFor="download">
                Download <DownloadSimple size={24} className="flex-none" />
              </label>
            </Button>
            <div
              className={cx([
                "pointer-events-none absolute -top-28 left-[20%] z-[-10] translate-x-[-30%] opacity-0 duration-150 ease-in-out",
                "flex flex-col  rounded-[0.625rem] bg-gray-900",
                "w-full min-w-max",
                "peer-checked:pointer-events-auto peer-checked:top-16 peer-checked:z-10 peer-checked:opacity-100",
                'before:absolute before:-top-2 before:left-[50%] before:h-5 before:w-5 before:translate-x-[-50%] before:rotate-45 before:bg-gray-900 before:content-[""]',
              ])}
            >
              <button
                onClick={() =>
                  download(
                    filteredVideo[0].video,
                    `${filteredVideo[0].title}.mp4`
                  )
                }
                className={style.btnDownload({ order: "first" })}
              >
                <MonitorPlay size={16} weight="bold" />
                Download do vídeo
              </button>
              <button
                onClick={() =>
                  download(
                    filteredVideo[0].audio,
                    `${filteredVideo[0].title}.mp3`
                  )
                }
                className={style.btnDownload()}
              >
                <FileAudio size={16} weight="bold" />
                Download do áudio
              </button>
              <button
                onClick={() =>
                  download(
                    filteredVideo[0].pdf,
                    `${filteredVideo[0].title}.pdf`
                  )
                }
                className={style.btnDownload({ order: "last" })}
              >
                <FileArrowDown size={16} weight="bold" />
                Download do PDF
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 px-10 xl:mx-auto xl:max-w-7xl xl:px-[5.75rem] xl:py-3">
          <h1 className="w-full text-left text-[2rem] font-bold leading-[2.375rem]">
            {filteredVideo[0].title}
          </h1>
          <div className="flex w-full flex-col gap-4">
            <h5 className="text-2xl font-bold ">Descrição</h5>
            <p>
              {filteredVideo[0].description
                .split("\n")
                .map((paragraph: string, index: number) => {
                  const wordsToBold = [
                    "A primeira dica",
                    "Outro ponto",
                    "Lembre-se",
                    "Verifique",
                  ];
                  const content = paragraph.trim();
                  const shouldBold = wordsToBold.some((word) =>
                    content.startsWith(word)
                  );

                  if (shouldBold) {
                    return (
                      <React.Fragment key={index}>
                        <b>{content}</b>
                        <br />
                        <br />
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={index}>
                        {content}
                        <br />
                        <br />
                      </React.Fragment>
                    );
                  }
                })}
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h5 className="w-full text-left text-2xl font-bold text-gray-900">
              Áudiodescrição
            </h5>
            <div className="relative mt-8 flex w-full rounded-[1.25rem] bg-gray-50">
              <div
                style={{
                  backgroundImage: `url(${filteredVideo[0].thumbnail})`,
                }}
                className="h-[6.625rem] w-[6.625rem] flex-none rounded-[1.25rem] bg-cover bg-right md:h-32 md:w-48 md:bg-left"
              ></div>
              <div className="w-full px-6 py-3 ">
                <div className="flex w-full items-center gap-3">
                  <div className="flex w-full items-center gap-3">
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-yellow-100"
                      onClick={audioPlay}
                    >
                      {playAudio ? (
                        <Pause weight="fill" />
                      ) : (
                        <Play weight="fill" />
                      )}
                    </button>
                    <p className="text-[1.25rem] font-bold text-gray-900">
                      Dicas do Zé{" "}
                    </p>
                  </div>
                  <div className="hidden min-w-[168px] items-center gap-2 md:flex">
                    <button onClick={handleMuted}>
                      {volume <= 0 ? (
                        <SpeakerX size={24} className="text-gray-900" />
                      ) : (
                        <SpeakerHigh size={24} className="text-gray-900" />
                      )}
                    </button>
                    <Slider.Root
                      onValueChange={(e:number[]) => handleVolumeChange(e[0])}
                      value={[volume]}
                      defaultValue={[100]}
                      className="relative flex h-5 w-full touch-none select-none items-center"
                      max={100}
                      step={1}
                    >
                      <Slider.Track className="relative h-1 flex-grow cursor-pointer rounded-full bg-gray-300">
                        <Slider.Range className="absolute h-full rounded-s-full bg-yellow-100" />
                      </Slider.Track>
                      <Slider.Thumb
                        className="block h-2 w-2 rounded-full border-2 border-gray-400 bg-yellow-50 shadow-sm outline-none"
                        aria-label="Volume"
                      />
                    </Slider.Root>
                  </div>
                  <audio ref={audioRef}>
                    <track kind="captions" src={filteredVideo[0].audio} />

                    <source src={filteredVideo[0].audio} type="audio/mp3" />
                  </audio>
                </div>
                <div className="relative mt-3 overflow-hidden">
                  <Slider.Root
                    onValueChange={(e:number[]) => showRangeProgress(e[0])}
                    value={[Math.ceil(progress)]}
                    className="relative flex h-5 w-full touch-none select-none items-center"
                    defaultValue={[0]}
                    max={100}
                    step={1}
                  >
                    <Slider.Track className="relative h-2 flex-grow cursor-pointer rounded-full bg-gray-300">
                      <Slider.Range className="absolute h-full rounded-s-full bg-yellow-100" />
                    </Slider.Track>
                    <Slider.Thumb
                      className="block h-3 w-3 rounded-full border-2 border-gray-400 bg-yellow-50 shadow-sm outline-none"
                      aria-label="Volume"
                    />
                  </Slider.Root>
                  <div className="flex items-center justify-between font-medium text-gray-900">
                    <span>{convertTimeToMinutes(progress)}</span>
                    <span>{convertTimeToMinutes(totalTime)}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="my-16 h-12 w-full max-w-[13.875rem]"
              theme={"secondary"}
              asChild
            >
              <Link to={"/home"}>Voltar ao início</Link>
            </Button>
          </div>
        </div>
      </section>
      <Toast
        text={showToast?.title}
        icon={showToast?.icon}
        setShowToast={setShowToast}
        showToast={showToast}
      />
    </main>
  );
};
