import React from 'react';
import greenCheck from '/images/green-check.png';

export const GreenCheck = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
       <img 
        src={greenCheck}
        alt="Green Check" 
        {...props} 
      />
    );
}