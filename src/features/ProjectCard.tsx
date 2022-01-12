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
  textContainer: {
    display: 'flex',
    alignItems: 'center',
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
              // alt="green iguana"
              image={imageUrl}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={classes.textContainer}>
          <Box >
            <Typography variant="h4">{headline}</Typography>
            <Typography variant="subtitle1">{flairText}</Typography>
            <Typography variant="body1">{shortDescription}</Typography>
            <Button variant="contained" disableElevation>{TEXT.buttonText}</Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
