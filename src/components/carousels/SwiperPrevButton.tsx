import type React from 'react';

import { NavArrowLeft } from 'iconoir-react';
import { useSwiper } from 'swiper/react';

const TEXT = {
  goToPrev: 'Go to previous image in the carousel',
  prevAlt: 'Arrow pointing to the left',
};

const SwiperPrevButton: React.FC = () => {
  const swiper = useSwiper();

  return (
    <button
      className='button'
      data-type='carousel'
      data-direction='prev'
      onClick={() => swiper.slidePrev()}
      aria-label={TEXT.goToPrev}
    >
      <NavArrowLeft aria-label={TEXT.prevAlt} />
    </button>
  );
};

export default SwiperPrevButton;
