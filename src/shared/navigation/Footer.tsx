import React from 'react';

import { SvgIcon } from '@mui/material';
import { SxProps } from '@mui/system';

import Trees from '../../images/trees.svg';
import ContentLayout from '../layout/ContentLayout';

const classes: { [className: string]: SxProps } = {
  trees: {
    width: { xs: '200vw', md: '140vw' },
    height: 'auto',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'block',
  },
};

const Footer: React.FC = () => (
  <ContentLayout component="footer" removeBottomPadding>
    <SvgIcon component={Trees} sx={classes.trees} viewBox="0 0 2607 227" />
  </ContentLayout>
);

export default Footer;
