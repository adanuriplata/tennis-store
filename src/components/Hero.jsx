import { Menu } from './Menu';
import { Button } from './Button';
import { useUiContext } from '../context/UiContext';
import Img1 from '../assets/images/group.jpg';
import Img2 from '../assets/images/group@2x.jpg';
import Img3 from '../assets/images/group@3x.jpg';

export const Hero = () => {
  const { openMenu, setOpenMenu } = useUiContext();
  return (
    <div className="hero">
      <section>
        <picture>
          <img src={Img1} srcSet={`${Img2} 2x, ${Img3} 3x`}></img>
        </picture>
      </section>
      <div className={`${openMenu ? 'open' : ''} hero__content`}>
        <div className="vertical-hero">
          <div className="vertical-hero__container-ball">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
            >
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M17.146.037c.39-.024.786-.037 1.182-.037C26.663 0 33.716 5.553 36 13.167a18.442 18.442 0 0 0-7.96 8.134 18.297 18.297 0 0 0-1.619 4.909 18.498 18.498 0 0 0 .522 8.651A18.311 18.311 0 0 1 18.329 37 18.37 18.37 0 0 1 5 31.287a18.334 18.334 0 0 0 2.71-.33 18.101 18.101 0 0 0 3.55-1.094 18.396 18.396 0 0 0 9.426-9.056 18.286 18.286 0 0 0 1.596-5.405 18.544 18.544 0 0 0-.164-5.925 18.297 18.297 0 0 0-1.729-4.981A18.482 18.482 0 0 0 17.146.037zM36.595 14c.265 1.292.405 2.632.405 4.007C37 24.73 33.662 30.639 28.636 34a18.359 18.359 0 0 1-.322-8.165 17.872 17.872 0 0 1 1.581-4.685 17.422 17.422 0 0 1 3.287-4.544A16.632 16.632 0 0 1 36.595 14zM15.315 0a17.273 17.273 0 0 1 3.755 4.873 17.37 17.37 0 0 1 1.61 4.636 17.65 17.65 0 0 1 .17 5.64 17.35 17.35 0 0 1-1.461 5.044 17.27 17.27 0 0 1-3.52 5 16.824 16.824 0 0 1-5.21 3.5A16.358 16.358 0 0 1 4.228 30c-.117 0-.232-.002-.348-.004A18.907 18.907 0 0 1 0 18.476C0 9.187 6.631 1.467 15.316 0z"
              />
            </svg>
          </div>
          <div className="vertical-hero__container-content">
            <nav>
              <Menu isMobile={true} />
              <div className="hero__content__nav__leng">
                <span>ES</span>
                <span>EN</span>
              </div>
            </nav>
            <div className="container-content">
              <h1>
                Las mejores raquetas para jugar <span>Tennis</span>
              </h1>
              <Button text={'Acerca de nosotros'} color={'white'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
