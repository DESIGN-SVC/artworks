import { ComponentPropsWithRef } from 'react';
import carlos1x from '../../assets/personas/carlos-1x.png';
import carlos2x from '../../assets/personas/carlos-2x.png';

export const PersonaCarlos = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={carlos1x}
      srcSet={`${carlos1x} 1x, ${carlos2x} 2x`}
      alt="Persona Carlos" 
      {...props}
    />
  );
}
