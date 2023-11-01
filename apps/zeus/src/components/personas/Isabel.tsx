import isabel1x from '../../assets/personas/isabel-1x.png';
import isabel2x from '../../assets/personas/isabel-2x.png';

export const PersonaIsabel = () => {
  return (
    <img
      srcSet={`${isabel1x} 1x, ${isabel2x} 2x`}
      alt="Persona Isabel" 
    />
  );
}