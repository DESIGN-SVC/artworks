import React from 'react';
import purpleCamera from '/images/purple-camera.png';

export const PurpleCamera = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
       <img 
        src={purpleCamera}
        alt="Purple Camera" 
        {...props} 
      />
    );
}