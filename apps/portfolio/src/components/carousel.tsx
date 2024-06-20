import { cx } from "cva";
import { ComponentPropsWithRef, forwardRef, useRef } from "react";

export const Root = forwardRef<HTMLUListElement, ComponentPropsWithRef<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cx([
        "flex items-center gap-8 w-full",
        "[&::-webkit-scrollbar]:hidden overflow-auto scroll-smooth",
        className,
      ])}
      {...props}
    />
  ),
);

type VideoProps = ComponentPropsWithRef<"video"> & {
  title: string;
  indexVideo: number;
};
export const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ className, title, indexVideo, ...props }) => {
    const videoRefs = useRef<Array<HTMLVideoElement>>([]);
    const handleMouseEnter = (index: number) => {
      const video = videoRefs.current[index];
      if (video) {
        const timeout = setTimeout(() => {
          video.play();
        }, 500);
        video.setAttribute("data-timeout-id", String(timeout));
      }
    };

    const handleMouseLeave = (index: number) => {
      const video = videoRefs.current[index];
      if (video) {
        const timeoutId = video.getAttribute("data-timeout-id");
        if (timeoutId) {
          clearTimeout(Number(timeoutId));
          video.removeAttribute("data-timeout-id");
        }
        video.pause();
      }
    };

    const handleTimeUpdate = (index: number) => {
      const video = videoRefs.current[index];
      if (video && video.currentTime >= 10) {
        video.pause();
      }
    };
    return (
      <li className="flex-none">
        <video
          ref={(el) => (videoRefs.current[indexVideo] = el!)}
          onMouseEnter={() => handleMouseEnter(indexVideo)}
          onMouseLeave={() => handleMouseLeave(indexVideo)}
          onTimeUpdate={() => handleTimeUpdate(indexVideo)}
          className={cx([
            "w-[16.25rem] rounded-[0.875rem] h-[10.625rem] object-cover",
            className,
          ])}
          muted
          {...props}
        />
        <h6 className="p-4 text-selago-950 dark:text-white">{title}</h6>
      </li>
    );
  },
);
