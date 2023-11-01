import lisa1x from '../../assets/personas/lisa-1x.png';
import lisa2x from '../../assets/personas/lisa-2x.png';

export const PersonaLisa = () => {
  return (
    <img
      srcSet={`${lisa1x} 1x, ${lisa2x} 2x`}
      alt="Persona Lisa" 
    />
  );
}