import type React from 'react';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <FontAwesomeIcon aria-label={TEXT.prevAlt} icon={faChevronLeft} />
    </button>
  );
};

export default SwiperPrevButton;
