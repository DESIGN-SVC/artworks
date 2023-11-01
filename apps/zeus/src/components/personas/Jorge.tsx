import jorge1x from '../../assets/personas/jorge-1x.png';
import jorge2x from '../../assets/personas/jorge-2x.png';

export const PersonaJorge = () => {
  return (
    <img
      srcSet={`${jorge1x} 1x, ${jorge2x} 2x`}
      alt="Persona Jorge" 
    />
  );
}