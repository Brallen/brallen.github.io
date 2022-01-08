import React from 'react';

import { Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

import NavigationLink from '../NavigationLink';

const classes: { [className: string]: SxProps } = {
  titleText: {
    '& a': {
      marginRight: { xs: 0, md: 7 },
      color: 'primary.main',
      textShadow: (theme: Theme) =>
        `-0.2px 0 ${theme.palette.primary.main}, 0 0.2px ${theme.palette.primary.main}, 0.2px 0 ${theme.palette.primary.main}, 0 -0.2px ${theme.palette.primary.main}`,
      lineHeight: 'normal',
      fontFamily: 'Bungee Shade',
    },
  },
  links: {
    marginTop: { xs: 5, md: 0 },
  },
  navLinkWrapper: {
    marginRight: 6,
    marginBottom: { xs: 4, md: 0 },
    display: { xs: 'block', md: 'inline-block' },

    '&:last-of-type': {
      marginRight: 0,
    },
  },
};

const TEXT = {
  TITLE: 'Brett Case',
  MARKETPLACE: 'Marketplace',
  LIBRARY: 'Library',
};

export const TitleLink: React.FC = () => (
  <Box sx={classes.titleText}>
    <NavigationLink text={TEXT.TITLE} url="/" variant="h4" />
  </Box>
);

export const HeaderLinks: React.FC = () => {
  return (
    <Box sx={classes.links}>
      <Box sx={classes.navLinkWrapper}>
        <NavigationLink text={TEXT.MARKETPLACE} url="/plans/000001/overview" />
      </Box>
      <Box sx={classes.navLinkWrapper}>
        <NavigationLink text={TEXT.LIBRARY} url="/dev" />
      </Box>
    </Box>
  );
};
