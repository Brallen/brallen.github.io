import React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Container, Theme, AppBar, useScrollTrigger, Slide, Drawer, IconButton, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import { useScrollTargets } from '../../util/ScrollTargetsContext';
import NavigationLink, { NavigationLinkProps } from './NavigationLink';

const classes: { [className: string]: SxProps } = {
  background: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
    backgroundColor: 'background.paper',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: (theme: Theme) => theme.spacing(9),
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  linkContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  mobileMenuOpener: {
    display: { md: 'none' },
  },
  mobileMenuCloser: {
    position: 'absolute',
    right: '20px',
  },
  drawer: {
    '& .MuiPaper-root': {
      minWidth: (theme: Theme) => theme.spacing(30),
      padding: (theme: Theme) => theme.spacing(1, 4),
    },
  },
};

const Header: React.FC = () => {
  const theme: Theme = useTheme();
  const { scrollTargets } = useScrollTargets();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={classes.links}>
      <Box sx={classes.navLinkWrapper}>
        {scrollTargets?.map((target, index) => (
          <>
            {console.log(target)}
            <NavigationLink key={index} text={`index: ${index}, target: ${target}`} url="www.google.com"/>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
