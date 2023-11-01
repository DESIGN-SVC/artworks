import enzo1x from '../../assets/personas/enzo-1x.png';
import enzo2x from '../../assets/personas/enzo-2x.png';

export const PersonaEnzo = () => {
  return (
    <img
      srcSet={`${enzo1x} 1x, ${enzo2x} 2x`}
      alt="Persona Enzo" 
    />
  );
}