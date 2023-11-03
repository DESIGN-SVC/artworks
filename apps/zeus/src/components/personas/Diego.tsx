import { ComponentPropsWithRef } from 'react';
import diego1x from '../../assets/personas/diego-1x.png';
import diego2x from '../../assets/personas/diego-2x.png';

export const PersonaDiego = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={diego1x}
      srcSet={`${diego1x} 1x, ${diego2x} 2x`}
      alt="Persona Diego" 
      {...props}
    />
  );
}