import { ComponentPropsWithRef } from 'react';
import lisa1x from '../../assets/personas/lisa-1x.png';
import lisa2x from '../../assets/personas/lisa-2x.png';

export const PersonaLisa = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={lisa1x}
      srcSet={`${lisa1x} 1x, ${lisa2x} 2x`}
      alt="Persona Lisa" 
      {...props}
    />
  );
}