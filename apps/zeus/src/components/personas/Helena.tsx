import helena1x from '../../assets/personas/helena-1x.png';
import helena2x from '../../assets/personas/helena-2x.png';

export const PersonaHelena = () => {
  return (
    <img
      srcSet={`${helena1x} 1x, ${helena2x} 2x`}
      alt="Persona Helena" 
    />
  );
}