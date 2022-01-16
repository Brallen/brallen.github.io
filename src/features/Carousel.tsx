import * as React from 'react';
import { useState } from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, MobileStepper } from '@mui/material';
import { SxProps } from '@mui/system';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { ImageContent } from '../shared/types/types';

const classes: { [className: string]: SxProps } = {
  container: {
    flexGrow: '1',
    position: 'relative',
  },
  image: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    px: 3,
  },
  carouselControlContainer: {
    justifyContent: 'center',
    backgroundColor: 'background.paper',
  },
  carouselControlLeft: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 0,
  },
  carouselControlRight: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 0,
  },
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type CarouselProps = Readonly<{
  images: ImageContent[],
}>;

const Carousel: React.FC<CarouselProps> = ({ images }) =>{
  const [ activeSlide, setActiveSlide ] = useState<number>(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveSlide((prevActiveSlide) => prevActiveSlide + 1 > maxSteps - 1 ? 0 : prevActiveSlide + 1);
  };

  const handleBack = () => {
    setActiveSlide((prevActiveSlide) => prevActiveSlide - 1 < 0 ? maxSteps - 1 : prevActiveSlide - 1);
  };

  const handleSlideChange = (step: number) => {
    setActiveSlide(step);
  };

  return (
    <Box sx={classes.container}>
      <AutoPlaySwipeableViews
        axis='x'
        index={activeSlide}
        onChangeIndex={handleSlideChange}
        enableMouseEvents
      >
        {images.map((slide, index) => (
          <div key={`slide-${index}`}>
            {Math.abs(activeSlide - index) <= 2 ? (
              <Box
                component="img"
                sx={classes.image}
                src={slide.url}
                alt={slide.altText}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeSlide}
        sx={classes.carouselControlContainer}
        nextButton={
          <KeyboardArrowRight onClick={handleNext} sx={classes.carouselControlRight} />
        }
        backButton={
          <KeyboardArrowLeft onClick={handleBack} sx={classes.carouselControlLeft} />
        }
      />
    </Box>
  );
};

export default Carousel;
