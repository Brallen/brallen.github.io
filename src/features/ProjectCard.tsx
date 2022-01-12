import React from 'react';

import { Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  card: {
    borderRadius: '15px',
  },
  container: {
    mb: 3,
    pb: 3,
    py: { md: 3 },
    px: 0,
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
      <Grid container spacing={2} sx={classes.container}>
        <Grid item xs={12} md={5}>
          {imageUrl !== undefined && (
            <CardMedia
              component="img"
              // alt="green iguana"
              image={imageUrl}
            />
          )}
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="card-body">
            <Typography variant="h4">{headline}</Typography>
            <Typography variant="subtitle1">{flairText}</Typography>
            <Typography variant="body1">{shortDescription}</Typography>
            <Button variant="contained" disableElevation>{TEXT.buttonText}</Button>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
