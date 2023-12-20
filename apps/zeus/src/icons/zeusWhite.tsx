import { ComponentPropsWithRef } from "react";
import  zeusWhite from "~/assets/zeus-white.png";

interface ZeusWhiteProps extends ComponentPropsWithRef<"img"> {
  imgRef: React.RefObject<HTMLImageElement>;
}

export const ZeusWhite = ({imgRef, ...props }: ZeusWhiteProps) => {
  return (
    <img
      ref={imgRef}
      src={zeusWhite}
      alt="White Zeus"
      {...props}
    />
  );
};
