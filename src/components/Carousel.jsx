import { useEffect, useRef, useState } from 'react';
import background from '../assets/images/ball-color-court-1405355@2x.jpg';
import imagenProduct from '../assets/images/product.png';

export const Carousel = () => {
  const ref = useRef();
  const [statusCarousel, setStatusCarousel] = useState({
    isFull: false,
    isEmpty: true,
    totalSlides: 3, //uno menos del total por que se debe contar el primero en salir como 0
    widthOfSlide: 288 + 36,
    currentSlide: 1,
  });

  const nextSlide = () => {
    ref.current.scrollLeft += statusCarousel.widthOfSlide;
    statusCarousel.currentSlide < 4 &&
      setStatusCarousel({
        ...statusCarousel,
        currentSlide: statusCarousel.currentSlide + 1,
      });
  };

  const prevSlide = () => {
    ref.current.scrollLeft -= statusCarousel.widthOfSlide;
    statusCarousel.currentSlide > 1 &&
      setStatusCarousel({
        ...statusCarousel,
        currentSlide: statusCarousel.currentSlide - 1,
      });
  };

  return (
    <div className="carousel" style={{ backgroundImage: `url(${background})` }}>
      <div className="carousel__controls">
        <h3>
          Nuestras <br /> <span> Raquetas</span>
        </h3>
        <p>
          Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.
        </p>
        <div className="carousel__controls__panel">
          {/* bullets */}
          <div className="container-bullets">
            <span
              className={`${
                statusCarousel.currentSlide === 1 ? 'activeSlide' : ''
              } container-bullets__item`}
            ></span>
            <span
              className={`${
                statusCarousel.currentSlide === 2 ? 'activeSlide' : ''
              } container-bullets__item`}
            ></span>
            <span
              className={`${
                statusCarousel.currentSlide === 3 ? 'activeSlide' : ''
              } container-bullets__item`}
            ></span>
            <span
              className={`${
                statusCarousel.currentSlide === 4 ? 'activeSlide' : ''
              } container-bullets__item`}
            ></span>
          </div>
          {/* buttons */}
          <div className="container-buttons">
            <div
              onClick={() => prevSlide()}
              className={`${
                statusCarousel.currentSlide === 1
                  ? 'carousel__controls__panel__button-empty'
                  : 'carousel__controls__panel__button'
              }`}
            >
              <div className="prev">
                <svg
                  id="triangle"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9"
                  height="13"
                  viewBox="0 0 100 100"
                  fill="white"
                >
                  <polygon points="50 15, 100 100, 0 100" />
                </svg>
              </div>
            </div>
            <div
              onClick={() => nextSlide()}
              className={`${
                statusCarousel.currentSlide === 4
                  ? 'carousel__controls__panel__button-empty'
                  : 'carousel__controls__panel__button'
              }`}
            >
              <div className="next">
                <svg
                  id="triangle"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="9"
                  height="13"
                  viewBox="0 0 100 100"
                  fill="white"
                >
                  <polygon points="50 15, 100 100, 0 100" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel__slides" ref={ref}>
        <div className="carousel__slides__item">
          <div className="carousel__slides__item__image">
            <img src={imagenProduct}></img>
          </div>
          <div className="carousel__slides__item__content">
            <div className="point">
              <div>1</div>
            </div>
          </div>
        </div>
        <div className="carousel__slides__item">
          <div className="carousel__slides__item__image">
            <img src={imagenProduct}></img>
          </div>
          <div className="carousel__slides__item__content">
            <div className="point">
              <div>2</div>
            </div>
          </div>
        </div>
        <div className="carousel__slides__item">
          <div className="carousel__slides__item__image">
            <img src={imagenProduct}></img>
          </div>
          <div className="carousel__slides__item__content">
            <div className="point">
              <div>3</div>
            </div>
          </div>
        </div>
        <div className="carousel__slides__item">
          <div className="carousel__slides__item__image">
            <img src={imagenProduct}></img>
          </div>
          <div className="carousel__slides__item__content">
            <div className="point">
              <div>4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
