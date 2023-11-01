import debora1x from '../../assets/personas/debora-1x.png';
import debora2x from '../../assets/personas/debora-2x.png';

export const PersonaDebora = () => {
  return (
    <img
      srcSet={`${debora1x} 1x, ${debora2x} 2x`}
      alt="Persona Debora" 
    />
  );
}