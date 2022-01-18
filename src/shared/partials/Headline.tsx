import React, { useEffect, useRef } from 'react';

import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import { useScrollTargets } from '../../util/ScrollTargetsContext';

const classes: { [className: string]: SxProps } = {
  headline: {
    pb: 3,

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: 'text.primary',
      height: '3px',
      width: '150px',
      mt: 1,
      mx: 'auto',
    },
  },
};

const Headline: React.FC = ({ children }) => {
  const headlineRef = useRef<HTMLHeadingElement>();
  const { setScrollTargets } = useScrollTargets();

  useEffect(() => {
    setScrollTargets((prev) => [ ...prev, headlineRef ]);
  }, [ headlineRef ]);

  return (
    <Typography variant="h3" align="center" ref={headlineRef} sx={classes.headline}>{children}</Typography>
  );
};

export default Headline;
