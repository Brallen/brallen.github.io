import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Card, Link as MuiLink, Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { Link as ReactLink } from 'react-router-dom';

import ContentLayout from '../shared/layout/ContentLayout';
import GradeCalculatorForm from '../shared/partials/GradeCalculatorForm';

const classes: { [className: string]: SxProps } = {
  backLink: {
    mb: 2,
    display: 'inline-flex',
    alignItems: 'center',
  },
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

const TEXT = {
  headlineText: 'Adjusted Grade Calculator',
  backToHomeLinkText: 'Back to Home',
};

const GradeCalculatorContainer: React.FC = () => {
  return (
    <ContentLayout>
      <MuiLink
        component={ReactLink}
        to={'/'}
        color="inherit"
        underline="none"
        variant="body1"
        sx={classes.backLink}>
        <ArrowBackIcon/>{TEXT.backToHomeLinkText}
      </MuiLink>
      <Card elevation={0} sx={classes.card}>
        <Box sx={classes.cardContent}>
          <Typography variant="body1" sx={classes.cardText}>{TEXT.headlineText}</Typography>
          <GradeCalculatorForm />
        </Box>
      </Card>
    </ContentLayout>
  );
};

export default GradeCalculatorContainer;
