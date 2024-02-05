import { ComponentPropsWithRef } from "react";
import camera from '/images/camera.png';

export const Camera = ({...props}: ComponentPropsWithRef<"img">) => {
    return (
       <img 
        src={camera}
        alt="Camera" 
        {...props} 
      />
    );
}