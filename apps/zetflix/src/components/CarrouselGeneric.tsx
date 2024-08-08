import { CaretLeft, CaretRight, Play } from "@phosphor-icons/react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { apiVideos } from "../services/api";
import { cx } from "cva";

export const CarrouselGeneric = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleCarouselScroll = (
    ref: React.RefObject<HTMLUListElement>,
    direction: "prev" | "next"
  ) => {
    if (!ref.current) return;

    const scrollWidth = ref.current.children[0].clientWidth + 20;
    const scrollDirection = direction === "prev" ? -1 : 1;
    const currentScrollLeft = ref.current.scrollLeft;
    const sliderWidth = ref.current.children[0].clientWidth;

    let newScrollLeft = currentScrollLeft + scrollWidth * scrollDirection;

    if (scrollDirection === -1) {
      const previousVisibleSliderIndex =
        Math.floor(currentScrollLeft / sliderWidth) - 1;
      newScrollLeft = previousVisibleSliderIndex * sliderWidth;
    }

    ref.current.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !carouselRef.current) return;

      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const scroll = (x - startX) * 1;

      if (scroll < 0) {
        handleCarouselScroll(carouselRef, "prev");
      }
      if (scroll > 0) {
        handleCarouselScroll(carouselRef, "next");
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && carouselRef.current) {
        const focusedElement = event.target as HTMLElement;
        if (carouselRef.current.contains(focusedElement)) {
          handleCarouselScroll(carouselRef, "next");
        }
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDragging, startX]);

  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <div className="relative w-full">
      <Carrosel
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
      />
      <button
        className="absolute -left-6 top-20 z-50 hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-gray-900 md:flex 3xl:hidden"
        onClick={() => handleCarouselScroll(carouselRef, "prev")}
      >
        <CaretLeft size={22} weight="bold" />
      </button>
      <button
        className="absolute -right-6 top-20 z-50 hidden h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-gray-900 md:flex 3xl:hidden"
        onClick={() => handleCarouselScroll(carouselRef, "next")}
      >
        <CaretRight size={22} weight="bold" />
      </button>
    </div>
  );
};

export const Carrosel = forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ ...rest }, ref) => {
  const videoRefs = useRef<Array<HTMLVideoElement>>([]);
  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]!;
    if (video) {
      const timeout = setTimeout(() => {
        if (video.currentTime < 2) {
          video.play();
        }
      }, 500);
      video.setAttribute("data-timeout-id", String(timeout));
    }
    if (video && video.currentTime >= 10) {
      video.pause();
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]!;
    if (video) {
      const timeoutId = video.getAttribute("data-timeout-id");
      clearTimeout(Number(timeoutId));
      video.pause();
    }
  };

  const handleTimeUpdate = (index: number) => {
    const video = videoRefs.current[index]!;
    if (video && video.currentTime >= 10) {
      video.pause();
    }
  };

  return (
    <ul
      className={cx([
        "relative flex w-full gap-6 overflow-auto scroll-smooth 3xl:justify-between [&::-webkit-scrollbar]:hidden",
      ])}
      ref={ref}
      {...rest}
    >
      {apiVideos.map(({ id, title, video, thumbnail, summary }, index) => (
        <li
          key={index}
          className={`max-w-[330px] flex-none ${
            index === 4 ? "pr-6 3xl:pr-0" : ""
          }`}
        >
          <div className="relative rounded-[1.25rem]">
            <Link to={`/player/${id}`}>
              <video
                ref={(el) => (videoRefs.current[index] = el!)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onTimeUpdate={() => handleTimeUpdate(index)}
                poster={thumbnail}
                src={video}
                muted
                className="w-full max-w-[330px] rounded-[1.25rem]"
              />
            </Link>
            <div className="absolute right-8 top-8 flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full bg-yellow-100">
              <Play size={15} weight="fill" />
            </div>
          </div>
          <Link to={`/player/${id}`}>
            <h4 className="overflow-hidden text-ellipsis whitespace-nowrap pb-1 pt-5 text-xl font-bold text-gray-900 ">
              {title}
            </h4>
          </Link>
          <p className="line-clamp-[3]  overflow-hidden text-ellipsis text-gray-300">
            {summary}
          </p>
        </li>
      ))}
    </ul>
  );
});
