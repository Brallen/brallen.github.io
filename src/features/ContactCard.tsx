import React from 'react';

import { Box, Card, Link, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import ContentLayout from '../shared/layout/ContentLayout';
import ContactForm from './ContactForm';


const classes: { [className: string]: SxProps } = {
  card: {
    borderRadius: '15px',
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    p: 4,
    textAlign: 'center',
  },
  cardText: {
    pb: 2,
  },
  link: {
    display: 'block',
    pb: 1,
    '&:last-of-type': {
      pb: 2,
    },
    'em': {
      fontStyle: 'normal',
      fontWeight: '300',
    },
  },
};

const CardContainer: React.FC = () => {
  return (
    <ContentLayout>
      <Card elevation={0} sx={classes.card}>
        <Box sx={classes.cardContent}>
          <Typography variant="body1" sx={classes.cardText}>Find me around the internet at</Typography>
          <Link
            color="inherit"
            underline="hover"
            variant="h5"
            href="https://github.com/Brallen"
            target="_blank"
            rel="noreferrer nofollow"
            sx={classes.link}
          >
            GitHub<em>.com/</em>Brallen
          </Link>
          <Link
            color="inherit"
            underline="hover"
            variant="h5"
            href="https://linkedin.com/in/brettcase"
            target="_blank"
            rel="noreferrer nofollow"
            sx={classes.link}
          >
            LinkedIn<em>.com/in/</em>BrettCase
          </Link>
          <Typography variant="body1" sx={classes.cardText}>Or send me an email to get in touch</Typography>
          <ContactForm />
        </Box>
      </Card>
    </ContentLayout>
  );
};

export default CardContainer;
