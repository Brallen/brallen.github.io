import React from 'react';

import { SvgIcon } from '@mui/material';
import { Box, SxProps } from '@mui/system';

import Trees from '../../images/trees.svg';

const classes: { [className: string]: SxProps } = {
  trees: {
    width: 'inherit',
    height: 'inherit',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const Footer: React.FC = () => {
  return (
    <Box component="footer">
      <SvgIcon component={Trees} sx={classes.trees} viewBox="0 0 2607 227" />
    </Box>
  );
};

export default Footer;
