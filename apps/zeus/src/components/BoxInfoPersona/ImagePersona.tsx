import { cx } from "cva";
import { ComponentPropsWithRef, useEffect, useState } from "react";
import { BackgroundIcons } from "./BackgroundItems";

interface ImagePersonaProps extends ComponentPropsWithRef<"img"> {
  img: {
    src: string;
    srcSet: string;
    alt: string;
  };
  index: number;
}

export const ImagePersona = ({
  img: { src, srcSet, alt },
  index,
  ...props
}: ImagePersonaProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDisplay = window.scrollY;
      setCurrentIndex(Math.floor(scrollDisplay / window.innerHeight));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cx([
        "order-2 w-full mt-auto",
        "md:w-auto md:self-center",
        "lg:order-1 lg:pt-20",
        "lg:row-span-2 lg:h-full relative",
      ])}
    >
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        className={cx([
          "lg:h-full relative z-20",
          index === currentIndex ? "animate-blowing" : "",
        ])}
        {...props}
      />
      <BackgroundIcons index={index} />
    </div>
  );
};
