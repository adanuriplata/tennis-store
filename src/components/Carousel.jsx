import React from 'react';
import background from '../assets/images/ball-color-court-1405355@2x.jpg';

export const Carousel = () => {
  return (
    <div className="carousel" style={{ backgroundImage: `url(${background})` }}>
      <div className="carousel__controls">
        <h3>
          Nuestras <br /> <span> Raquetas</span>
        </h3>
        <p>
          Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
        </p>
      </div>
      <div className="carousel__slides">
        <span>imagen 1</span>
        <span>imagen 2</span>
        <span>imagen 3</span>
      </div>
    </div>
  );
};
