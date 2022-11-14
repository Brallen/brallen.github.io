import type React from 'react';

import { NavArrowLeft } from 'iconoir-react';
import { useSwiper } from 'swiper/react';

const SwiperPrevButton: React.FC = () => {
  const swiper = useSwiper();

  return (
    <button className="button" data-type='carousel' data-direction='prev' onClick={() => swiper.slidePrev()}><NavArrowLeft /></button>
  );
};

export default SwiperPrevButton;
