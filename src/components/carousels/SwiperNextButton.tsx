import type React from 'react';

import { NavArrowRight } from 'iconoir-react';
import { useSwiper } from 'swiper/react';

const TEXT = {
  goToNext: 'Go to next image in the carousel',
  nextAlt: 'Arrow pointing to the right',
};

const SwiperNextButton: React.FC = () => {
  const swiper = useSwiper();

  return (
    <button
      className='button'
      data-type='carousel'
      data-direction='next'
      onClick={() => swiper.slideNext()}
      aria-label={TEXT.goToNext}
    >
      <NavArrowRight aria-label={TEXT.nextAlt} />
    </button>
  );
};

export default SwiperNextButton;
