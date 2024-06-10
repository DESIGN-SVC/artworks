import { ComponentPropsWithRef } from "react";
import camera3d from "~/assets/image/camera-3D.png";

export const PurpleCamera = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return <img src={camera3d} alt="Purple Camera" {...props} />;
};
