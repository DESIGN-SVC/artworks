import { ComponentPropsWithRef } from 'react';
import douglas1x from '../../assets/personas/douglas-1x.png';
import douglas2x from '../../assets/personas/douglas-2x.png';

export const PersonaDouglas = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={douglas1x}
      srcSet={`${douglas1x} 1x, ${douglas2x} 2x`}
      alt="Persona Douglas" 
      {...props}
    />
  );
}