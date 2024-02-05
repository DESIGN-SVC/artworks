import React from 'react';
import monitor from '/images/monitor.png';

export const Monitor = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
       <img 
        src={monitor}
        alt="Monitor" 
        {...props} 
      />
    );
}