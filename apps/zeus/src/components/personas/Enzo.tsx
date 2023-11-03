import { ComponentPropsWithRef } from 'react';
import enzo1x from '../../assets/personas/enzo-1x.png';
import enzo2x from '../../assets/personas/enzo-2x.png';

export const PersonaEnzo = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={enzo1x}
      srcSet={`${enzo1x} 1x, ${enzo2x} 2x`}
      alt="Persona Enzo" 
      {...props}
    />
  );
}