import { ComponentPropsWithRef, useEffect, useState } from "react";
import { ZBlue, ZWhite, ZeusBlue, ZeusWhite } from "../../icons";
import React from "react";

interface BackgroundIconsProps extends ComponentPropsWithRef<"div"> {
  index: number;
}

export const BackgroundIcons = ({ index, ...props }: BackgroundIconsProps) => {
  const firstImgRef = React.useRef<HTMLImageElement>(null);
  const secondImgRef = React.useRef<HTMLImageElement>(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentScrolltop, setCurrentScrolltop] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const setScrollEffects = () => {
      if (firstImgRef.current && secondImgRef.current) {
        
        if (lastScroll < currentScroll) {
          //scroll down
          setCurrentScrolltop(currentScrolltop - 10);

          firstImgRef.current.style.transform = `translate3d(${currentScrolltop * 0.05}px, ${currentScrolltop * 0.3}px, 0px)`;
          secondImgRef.current.style.transform = `translate3d(0px, ${currentScrolltop * 0.3}px, 0px)`;

          currentIndex !== index && setCurrentScrolltop(0);

        } else if (lastScroll > currentScroll) {
          //scroll up
          setCurrentScrolltop(currentScrolltop + 10);
          
          firstImgRef.current.style.transform = `translate3d(${currentScrolltop > 0 ? setCurrentScrolltop(0) : 0}px, ${currentScrolltop * 0.3}px, 0px`;
          secondImgRef.current.style.transform = `translate3d(${currentScrolltop > 0 ? setCurrentScrolltop(0) : 0}px, ${currentScrolltop > 0 ? 0 : currentScrolltop * 0.3}px, 0px)`;
          
          currentIndex !== index && setCurrentScrolltop(0);
        }
      }
    };

    const handleScroll = () => {
      setLastScroll(currentScroll);
      setCurrentScroll(window.scrollY);
      setCurrentIndex(Math.floor(window.scrollY / window.innerHeight));
      setScrollEffects();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, currentScroll, currentScrolltop, index, lastScroll]);

  return index % 2 == 0 ? (
    <div
      className="inset-0 flex flex-col items-center justify-center "
      {...props}
    >
      <ZBlue
        imgRef={firstImgRef}
        className="z-0 absolute w-1/3 bottom-1/2 left-0 transform transition duration-200 ease-in-out"
      />
      <ZeusWhite
        imgRef={secondImgRef}
        className="z-0 absolute w-1/4 bottom-1/2 right-0 transform transition duration-200 ease-in-out"
      />
    </div>
  ) : (
    <div
      className="inset-0 flex flex-col items-center justify-center"
      {...props}
    >
      <ZeusBlue
        imgRef={firstImgRef}
        className="z-0 absolute w-1/3 bottom-1/2 left-0 transform transition duration-200 ease-in-out"
      />
      <ZWhite
        imgRef={secondImgRef}
        className="z-0 absolute w-1/4 bottom-1/2 right-0 transform transition duration-200 ease-in-out"
      />
    </div>
  );
};
