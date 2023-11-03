import { ComponentPropsWithRef } from 'react';
import jorge1x from '../../assets/personas/jorge-1x.png';
import jorge2x from '../../assets/personas/jorge-2x.png';

export const PersonaJorge = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={jorge1x}
      srcSet={`${jorge1x} 1x, ${jorge2x} 2x`}
      alt="Persona Jorge" 
      {...props}
    />
  );
}