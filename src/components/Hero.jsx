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
        <nav>
          <Menu isMobile={true} />
          <div className="hero__content__nav__leng">
            <span>ES</span>
            <span>EN</span>
          </div>
        </nav>
        <div>
          <h1>
            Las mejores raquetas para jugar <span>Tennis</span>
          </h1>
          <Button text={'Acerca de nosotros'} color={'white'} />
        </div>
      </div>
    </div>
  );
};
