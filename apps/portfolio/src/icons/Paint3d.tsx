import { ComponentPropsWithRef } from "react";
import paint3d from "~/assets/image/palette.png";

export const Paint3d = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return <img src={paint3d} alt="Palette" {...props} />;
};
