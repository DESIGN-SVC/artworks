import { ComponentPropsWithRef } from 'react';
import rodrigo1x from '../../assets/personas/rodrigo-1x.png';
import rodrigo2x from '../../assets/personas/rodrigo-2x.png';

export const PersonaRodrigo = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={rodrigo1x}
      srcSet={`${rodrigo1x} 1x, ${rodrigo2x} 2x`}
      alt="Persona Rodrigo" 
      {...props}
    />
  );
}