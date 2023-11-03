import { ComponentPropsWithRef } from 'react';
import debora1x from '../../assets/personas/debora-1x.png';
import debora2x from '../../assets/personas/debora-2x.png';

export const PersonaDebora = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={debora1x}
      srcSet={`${debora1x} 1x, ${debora2x} 2x`}
      alt="Persona Debora" 
      {...props}
    />
  );
}