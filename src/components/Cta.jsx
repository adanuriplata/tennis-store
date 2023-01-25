import { Button } from './Button';

export const Cta = () => {
  return (
    <div className="cta">
      <div className="cta__tennis">
        <p className="yellow">TENNIS</p>
      </div>
      <div className="cta__content">
        <h2>Raquetas.Accesorios. Pelotas.</h2>
        <p>
          Conoce nuestras raquetas y aprende a jugar <br /> Tennis cómo un
          profesional.
        </p>
      </div>
      <div className="cta__button">
        <Button text={'Historia'} color={'dark'} />
      </div>
    </div>
  );
};
