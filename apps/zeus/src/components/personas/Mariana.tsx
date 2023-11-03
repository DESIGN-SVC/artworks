import { ComponentPropsWithRef } from 'react';
import mariana1x from '../../assets/personas/mariana-1x.png';
import mariana2x from '../../assets/personas/mariana-2x.png';

export const PersonaMariana = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={mariana1x}
      srcSet={`${mariana1x} 1x, ${mariana2x} 2x`}
      alt="Persona Mariana" 
      {...props}
    />
  );
}