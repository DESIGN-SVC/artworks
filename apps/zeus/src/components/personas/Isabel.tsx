import { ComponentPropsWithRef } from 'react';
import isabel1x from '../../assets/personas/isabel-1x.png';
import isabel2x from '../../assets/personas/isabel-2x.png';

export const PersonaIsabel = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={isabel1x}
      srcSet={`${isabel1x} 1x, ${isabel2x} 2x`}
      alt="Persona Isabel" 
      {...props}
    />
  );
}