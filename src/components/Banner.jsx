import React from 'react';
import Img1 from '../assets/images/action-athlete-ball.jpg';
import Img2 from '../assets/images/action-athlete-ball@2x.jpg';
import Img3 from '../assets/images/action-athlete-ball@3x.jpg';

export const Banner = () => {
  return (
    <div className="banner">
      <section>
        <picture>
          {/* <img src={Img1}></img> */}
          <img src={Img1} srcSet={`${Img2} 2x, ${Img3} 3x`}></img>
        </picture>
      </section>
    </div>
  );
};
