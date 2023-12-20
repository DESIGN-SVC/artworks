import { ComponentPropsWithRef, useEffect, useState } from "react";
import { ZBlue, ZWhite, ZeusBlue, ZeusWhite } from "~/icons";
import React from "react";

interface BackgroundIconsProps extends ComponentPropsWithRef<"div"> {
  index: number;
}

export const BackgroundIcons = ({ index, ...props }: BackgroundIconsProps) => {
  const [firstImgRef, secondImgRef] = [React.useRef<HTMLImageElement>(null), React.useRef<HTMLImageElement>(null)];
  const [lastScroll, setLastScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const setScrollEffects = () => {
      if (firstImgRef.current && secondImgRef.current) {
        if (lastScroll < currentScroll) {
          //scroll down
          firstImgRef.current.style.transform = `translate3d(0px, -60px, 0px)`;
          secondImgRef.current.style.transform = `translate3d(0px, -100px, 0px)`;
        }
        if (lastScroll > currentScroll) {
          //scroll up
          firstImgRef.current.style.transform = `translate3d(0px, 0px, 0px)`;
          secondImgRef.current.style.transform = `translate3d(0px, 0px, 0px)`;
        }
      }
    };

    const handleScroll = () => {
      setLastScroll(currentScroll);
      setCurrentScroll(window.scrollY);
      setCurrentIndex(Math.floor(window.scrollY / window.innerHeight) - 1);
      setScrollEffects();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, currentScroll, firstImgRef, index, lastScroll, secondImgRef]);

  return index % 2 == 0 ? (
    <div
      className="inset-0 flex flex-col items-center justify-center "
      {...props}
    >
      <ZBlue
        imgRef={firstImgRef}
        className="z-0 absolute w-1/3 bottom-1/3 left-0 transform transition duration-1000 ease-in-out"
      />
      <ZeusWhite
        imgRef={secondImgRef}
        className="z-0 absolute w-1/4 bottom-1/2 right-0 transform transition duration-1000 ease-in-out"
      />
    </div>
  ) : (
    <div
      className="inset-0 flex flex-col items-center justify-center"
      {...props}
    >
      <ZeusBlue
        imgRef={firstImgRef}
        className="z-0 absolute w-1/3 bottom-1/3 left-0 transform transition duration-[1500ms] ease-in-out"
      />
      <ZWhite
        imgRef={secondImgRef}
        className="z-0 absolute w-1/4 bottom-1/2 right-0 transform transition duration-[2000ms] ease-in-out"
      />
    </div>
  );
};
