import { ComponentPropsWithRef } from "react";
import purpleCamera from '/images/purple-camera.png';

export const PurpleCamera = ({...props}: ComponentPropsWithRef<"img">) => {
    return (
       <img 
        src={purpleCamera}
        alt="Purple Camera" 
        {...props} 
      />
    );
}