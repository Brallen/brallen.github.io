import type React from 'react';

import { EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import type { ImageContent } from '../../types/types';
import SwiperNextButton from './SwiperNextButton';
import SwiperPrevButton from './SwiperPrevButton';

export interface ImageCardCarouselProps {
  images: ImageContent[];
}

const ImageCardCarousel: React.FC<ImageCardCarouselProps> = ({ images }) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[ EffectCards ]}
    >
      <SwiperPrevButton />

      {images.map((image, index) =>
        <SwiperSlide className="apply-border-radius" key={`image-${index}`}>
          <img className='image | apply-border-radius' src={image.url} alt={image.altText} loading="lazy"/>
        </SwiperSlide>)}

      <SwiperNextButton />
    </Swiper>
  );
};

export default ImageCardCarousel;
