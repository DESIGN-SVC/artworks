import { ComponentPropsWithRef } from 'react';
import beca1x from '../../assets/personas/beca-1x.png';
import beca2x from '../../assets/personas/beca-2x.png';

export const PersonaBeca = ({...props}: ComponentPropsWithRef<"img">) => {
  return (
    <img
      src={beca1x}
      srcSet={`${beca1x} 1x, ${beca2x} 2x`}
      alt="Persona Beca"
      {...props}
    />
  );
}