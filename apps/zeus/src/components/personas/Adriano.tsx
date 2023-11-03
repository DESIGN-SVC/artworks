import { ComponentPropsWithRef } from 'react';
import adriano1x from '../../assets/personas/adriano-1x.png';
import adriano2x from '../../assets/personas/adriano-2x.png';

export const PersonaAdriano = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={adriano1x}
      srcSet={`${adriano1x} 1x, ${adriano2x} 2x`}
      alt="Persona Adriano" 
      {...props}
    />
  );
}
