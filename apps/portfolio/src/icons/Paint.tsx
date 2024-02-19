import { ComponentPropsWithRef } from "react";
import paint from "~/assets/image/paint.png";

export const Paint = ({ ...props }: ComponentPropsWithRef<"img">) => (
  <img src={paint} alt="Palette" {...props} />
);
