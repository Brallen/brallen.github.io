import React from 'react';

import { SvgIcon, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import Landscape from '../images/landscape.svg';
import ContentLayout from '../shared/layout/ContentLayout';

const classes: { [className: string]: SxProps } = {
  titleText: {
    pt: 8,
  },
  accentText: {
    pb: 8,
  },
  image: {
    width: { xs: '200vw', md: '140vw' },
    height: 'auto',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'block',
  },
};

const Marquee: React.FC = () => {
  return (
    <ContentLayout altBackgroundColor removeBottomPadding>
      <Typography variant="h1" align="center" sx={classes.titleText}>Brett Case</Typography>
      <Typography variant="h2" align="center" sx={classes.accentText}>Software Engineer</Typography>
      <SvgIcon component={Landscape} sx={classes.image} viewBox="0 0 2665 886" />
    </ContentLayout>
  );
};

export default Marquee;
