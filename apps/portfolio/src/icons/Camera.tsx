import React from 'react';
import camera from '/images/camera.png';

export const Camera = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
       <img 
        src={camera}
        alt="Camera" 
        {...props} 
      />
    );
}