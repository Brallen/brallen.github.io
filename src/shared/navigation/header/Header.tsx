import React from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Container, Theme, AppBar, useScrollTrigger, Slide, Drawer, IconButton, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

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

const HideOnScroll: React.FC = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children as React.ReactElement}
    </Slide>
  );
};

export interface HeaderProps {
  title: React.ReactNode;
  navigation: React.ReactNode;
}

interface LayoutProps {
  navigation: React.ReactNode;
}

const DesktopLayout: React.FC<LayoutProps> = ({ navigation }) => {
  return (
    <Box sx={classes.row}>
      <Box sx={classes.linkContainer}>{navigation}</Box>
    </Box>
  );
};

const MobileLayout: React.FC<LayoutProps> = ({ navigation }) => {
  const [ drawerOpen, setDrawerOpen ] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <IconButton
        sx={classes.mobileMenuOpener}
        color="inherit"
        aria-label="open main navigation"
        edge="end"
        onClick={handleDrawerToggle}
        size="large"
      >
        <MenuRoundedIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={classes.drawer}
      >
        <IconButton
          color="inherit"
          aria-label="close main navigation"
          onClick={handleDrawerToggle}
          sx={classes.mobileMenuCloser}
          size="large"
        >
          <CloseRoundedIcon />
        </IconButton>
        {navigation}
      </Drawer>
    </>
  );
};

const Header: React.FC<HeaderProps> = ({ title, navigation }) => {
  const theme: Theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HideOnScroll>
      <AppBar sx={classes.background}>
        <Container maxWidth={'xl'} fixed sx={classes.headerContainer}>
          {title}
          {isDesktop ? <DesktopLayout navigation={navigation} /> : <MobileLayout navigation={navigation} />}
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
