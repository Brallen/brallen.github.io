import React from 'react';

import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  card: {
    borderRadius: '15px',
    mb: 5,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    py: { xs: 0, md: 4 },
    pl: { xs: 0, md: 4 },
  },
  textGridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  textContainer: {
    pt: { xs: 0, md: 4 },
    pr: 4,
    pb: 4,
    pl: { xs: 4, md: 0 },
    width: '100%',
    textAlign: { xs: 'center', md: 'left' },
  },
};

const TEXT = {
  buttonText: 'Learn More',
};

export type ProjectCardProps = Readonly<{
  imageUrl: string,
  headline: string,
  flairText: string,
  shortDescription: string,
}>;

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, headline, flairText, shortDescription }) => {
  return (
    <Card elevation={0} sx={classes.card}>
      <Grid container spacing={4} sx={classes.container}>
        <Grid item xs={12} md={6}>
          <Box sx={classes.imageContainer}>
            <CardMedia
              component="img"
              alt="Project Image" // update this with actual alt text
              image={imageUrl}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={classes.textGridItem}>
          <Box sx={classes.textContainer}>
            <Typography variant="h4">{headline}</Typography>
            <Typography variant="subtitle1">{flairText}</Typography>
            <Typography variant="body2">{shortDescription}</Typography>
            <Button variant="contained" disableElevation>{TEXT.buttonText}</Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
