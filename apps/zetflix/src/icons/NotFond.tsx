import { ComponentPropsWithoutRef } from "react";
import image1x from "../assets/image/not-found@1x.png";
import image2x from "../assets/image/not-found@2x.png";
export const NotFound = (props: ComponentPropsWithoutRef<"img">) => (
  <img src={image1x} srcSet={`${image1x} 1x, ${image2x} 2x`} {...props} />
);
