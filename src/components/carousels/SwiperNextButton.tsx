import type React from 'react';

import { NavArrowRight } from 'iconoir-react';
import { useSwiper } from 'swiper/react';


const SwiperNextButton: React.FC = () => {
  const swiper = useSwiper();

  return (
    <button className="button" data-type='carousel' data-direction='next' onClick={() => swiper.slideNext()}><NavArrowRight /></button>
  );
};

export default SwiperNextButton;
