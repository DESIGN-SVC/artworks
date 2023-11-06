import { ComponentPropsWithRef } from 'react';
import milena1x from '../../assets/personas/milena-1x.png';
import milena2x from '../../assets/personas/milena-2x.png';

export const PersonaMilena = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={milena1x}
      srcSet={`${milena1x} 1x, ${milena2x} 2x`}
      alt="Persona Milena" 
      {...props}
    />
  );
}