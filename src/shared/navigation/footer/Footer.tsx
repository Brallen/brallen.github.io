import React from 'react';

import { Box, Container, Grid, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  background: {
    borderTop: (theme: Theme) => `3px solid ${theme.palette.primary.main}`,
    backgroundColor: 'common.black',
  },
  footerContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  footerGrid: {
    display: 'flex',
  },
  text: {
    '& a, & p': {
      color: 'common.white',
    },
  },
  socialLinks: {
    display: 'flex',
    justifyContent: { md: 'flex-end' },

    '& a': {
      color: 'common.white',
    },
  },
  legalContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    order: { xs: 4, md: 3 },
  },
  titleContainer: {
    order: { xs: 3, md: 4 },
  },
  title: {
    display: 'flex',
    justifyContent: { md: 'flex-end' },
  },
};

interface FooterProps {
  legal: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ legal }) => {
  return (
    <Box component="footer" sx={classes.background}>
      <Container maxWidth={'xl'} fixed sx={classes.footerContainer}>
        <Grid container spacing={2} sx={classes.footerGrid}>
          <Grid item xs={12} md={8} sx={classes.legalContainer}>
            <Box sx={classes.text}>{legal}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
