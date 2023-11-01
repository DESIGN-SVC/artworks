import edna1x from '../../assets/personas/edna-1x.png';
import edna2x from '../../assets/personas/edna-2x.png';

export const PersonaEdna = () => {
  return (
    <img
      srcSet={`${edna1x} 1x, ${edna2x} 2x`}
      alt="Persona Edna" 
    />
  );
}