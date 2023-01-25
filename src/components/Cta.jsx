import { Button } from './Button';

export const Cta = () => {
  return (
    <div className="cta">
      <div>
        <p className="yellow">TENNIS</p>
      </div>
      <div className="cta__content">
        <h2>Raquetas.Accesorios. Pelotas.</h2>
        <p>
          Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
        </p>
      </div>
      <div>
        <Button text={'Historia'} color={'dark'} />
      </div>
    </div>
  );
};
