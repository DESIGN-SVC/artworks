import { ComponentPropsWithRef } from 'react';

interface PersonaProps extends ComponentPropsWithRef<"img"> {
  src: string;
  srcSet: string;
  alt: string;
}

export const Persona = ({src,srcSet,alt,...props}: PersonaProps) => {
  return (
    <img
      src={src}
      srcSet={srcSet}
      alt={alt}
      {...props}
    />
  );
}
