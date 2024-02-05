import React from 'react';
import palette from '/images/palette.png';

export const Palette = ({...props}: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
       <img 
        src={palette}
        alt="Palette" 
        {...props} 
      />
    );
}