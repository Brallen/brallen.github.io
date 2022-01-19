import React from 'react';

import { Theme, useMediaQuery, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { animateScroll as scroll } from 'react-scroll';

import { Reference, useScrollTargets } from '../../util/ScrollTargetsContext';

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

  const handleScrollTargetClick = (target: Reference) => {
    scroll.scrollTo(target.current.getBoundingClientRect().top - 75, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Box sx={classes.links}>
      <Box sx={classes.navLinkWrapper}>
        {scrollTargets?.map((target, index) => (
          <Button key={`scroll-${index}`} onClick={() => handleScrollTargetClick(target)} variant="text">
            {target.current.innerText}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
