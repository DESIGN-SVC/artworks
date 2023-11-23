import { ComponentPropsWithRef } from "react";
import robot1x from "../assets/robot-1x.png";
import robot2x from "../assets/robot-2x.png";

export const Robot = ({ ...props }: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={robot1x}
      srcSet={`${robot1x} 1x, ${robot2x} 2x`}
      alt="Robô"
      {...props}
    />
  );
};
