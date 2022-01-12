import React from 'react';

import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  headline: {
    mb: 3,

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
  return (
    <Typography variant="h3" align="center" sx={classes.headline}>{children}</Typography>
  );
};

export default Headline;
