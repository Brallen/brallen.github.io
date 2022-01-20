import React, { useEffect, useState } from 'react';

import { Menu, Close } from '@mui/icons-material';
import { Theme, useMediaQuery, Box, Paper, ClickAwayListener, IconButton, Container, Slide, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { animateScroll as scroll } from 'react-scroll';

import { Reference, useScrollTargets } from '../../util/ScrollTargetsContext';

const classes: { [className: string]: SxProps } = {
  header: {
    position: 'fixed',
    zIndex: 99,
    width: '100%',
    pt: { xs: 1, md: 3 },
  },
  centeringContainer: {
    display: 'flex',
    justifyContent: { xs: 'flex-start', md: 'center' },
  },
  container: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: { xs: 'flex-start', md: 'center' },
    alignItems: 'flex-start',
  },
  toggleButton: {
    display: { xs: 'inline-flex', md: 'none' },
    backgroundColor: 'background.paper',
    border: '1px solid',
    borderColor: 'secondary.main',
    mb: 1,
    color: 'text.primary',
  },
  linksBackground: {
    borderRadius: '15px',
    border: '1px solid',
    borderColor: 'secondary.main',
    p: 1,
  },
  navButton: {
    color: 'text.primary',
  },
};

const Header: React.FC = () => {
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { scrollTargets } = useScrollTargets();
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(true);
    }
  }, [ isDesktop ]);

  const toggleNav = () => {
    if (isDesktop) {
      return;
    }

    setIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    if (isDesktop) {
      return;
    }

    setIsOpen(false);
  };

  const handleScrollTargetClick = (target: Reference) => {
    const locationToSCroll = window.scrollY + target.current.getBoundingClientRect().top - 100;
    scroll.scrollTo(locationToSCroll, {
      duration: 500,
      smooth: true,
    });

    closeNav();
  };

  return (
    <Box component="header" sx={classes.header}>
      <Container fixed sx={classes.centeringContainer}>
        <ClickAwayListener onClickAway={closeNav}>
          <Box sx={classes.container}>
            <IconButton
              aria-controls={isOpen ? 'navigation-menu' : undefined}
              aria-expanded={isOpen ? 'true' : undefined}
              aria-haspopup={isDesktop ? 'false' : 'true'}
              onClick={toggleNav}
              sx={classes.toggleButton}
            >
              {isOpen ? (<Close />) : (<Menu />)}
            </IconButton>

            <Slide direction="right" in={isOpen}>
              <Paper component="nav" elevation={1} id="navigation-menu" sx={classes.linksBackground}>
                <Stack direction={{ xs: 'column', md: 'row' }}>
                  {scrollTargets?.map((target, index) => (
                    <Button key={`nav-button-${index}`} onClick={() => handleScrollTargetClick(target)} sx={classes.navButton}>
                      {target.current.innerText}
                    </Button>
                  ))}
                </Stack>
              </Paper>
            </Slide>
          </Box>
        </ClickAwayListener>
      </Container>
    </Box>
  );
};

export default Header;
