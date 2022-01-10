import React from 'react';

import { SvgIcon } from '@mui/material';
import { Box, SxProps } from '@mui/system';

import Trees from '../../images/trees.svg';

const classes: { [className: string]: SxProps } = {
  container: {
    position: 'relative',
  },
  trees: {
    width: 'inherit',
    height: 'inherit',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const Footer: React.FC = () => {
  return (
    <Box>
      <SvgIcon component={Trees} sx={classes.trees} viewBox="0 0 2607 227" />
    </Box>
  );
};

export default Footer;
