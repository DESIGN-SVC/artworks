import { ComponentPropsWithoutRef } from "react";
import image2x from "../assets/image/ze-te-informa@1x.png";
import image1x from "../assets/image/ze-te-informa@2x.png";
export const ZeTeInforma = (props: ComponentPropsWithoutRef<"img">) => (
  <img src={image1x} srcSet={`${image1x} 1x, ${image2x} 2x`} {...props} />
);
