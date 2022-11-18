import type React from 'react';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <FontAwesomeIcon aria-label={TEXT.nextAlt} icon={faChevronRight} />
    </button>
  );
};

export default SwiperNextButton;
