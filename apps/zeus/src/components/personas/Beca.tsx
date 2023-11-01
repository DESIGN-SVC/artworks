import beca1x from '../../assets/personas/beca-1x.png';
import beca2x from '../../assets/personas/beca-2x.png';

export const PersonaBeca = () => {
  return (
    <img
      srcSet={`${beca1x} 1x, ${beca2x} 2x`}
      alt="Persona Beca"
    />
  );
}