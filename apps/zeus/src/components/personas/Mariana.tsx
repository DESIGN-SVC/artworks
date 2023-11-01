import mariana1x from '../../assets/personas/mariana-1x.png';
import mariana2x from '../../assets/personas/mariana-2x.png';

export const PersonaMariana = () => {
  return (
    <img
      srcSet={`${mariana1x} 1x, ${mariana2x} 2x`}
      alt="Persona Mariana" 
    />
  );
}