import React from 'react';

import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import { ProjectCardContent } from '../shared/types/types';
import { useDialogState } from '../util/DialogContext';

const classes: { [className: string]: SxProps } = {
  card: {
    borderRadius: '15px',
    mb: 5,
    '&:last-of-type': {
      mb: 0,
    },
  },
  imageContainerLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    py: { xs: 0, md: 4 },
    pl: { xs: 0, md: 4 },
  },
  imageContainerRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    py: { xs: 0, md: 4 },
    pr: { xs: 0, md: 4 },
  },
  textGridItem: {
    display: 'flex',
    alignItems: 'center',
  },
  textContainerLeft: {
    width: '100%',
    textAlign: { xs: 'center', md: 'left' },
    pt: { xs: 0, md: 4 },
    pr: { xs: 4, md: 0 },
    pb: 4,
    pl: 4,
  },
  textContainerRight: {
    width: '100%',
    textAlign: { xs: 'center', md: 'left' },
    pt: { xs: 0, md: 4 },
    pr: 4,
    pb: 4,
    pl: { xs: 4, md: 0 },
  },
  flairText: {
    mb: 2,
  },
  shortDescription: {
    mb: 2,
  },
};

const TEXT = {
  buttonText: 'Learn More',
};


type ProjectCardProps = Readonly<{
  content: ProjectCardContent,
  flipContent?: boolean,
}>;

const ProjectCard: React.FC<ProjectCardProps> = ({ content, flipContent = false }) => {
  const { setDialogContent, setIsDialogOpen } = useDialogState();

  function toggleDialogOpen(): void {
    setIsDialogOpen((currIsDialogOpen) => !currIsDialogOpen);
    setDialogContent(content.dialogContent);
  }

  return (
    <Card elevation={0} sx={classes.card}>
      <Grid container spacing={4} sx={classes.container}>
        <Grid item xs={12} md={6} order={{ xs: 1, md: flipContent ? 2 : 1 }}>
          <Box sx={flipContent ? classes.imageContainerRight : classes.imageContainerLeft}>
            <CardMedia
              component="img"
              alt="Project Image" // update this with actual alt text
              image={content.imageUrl}
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={classes.textGridItem} order={{ xs: 2, md: flipContent ? 1 : 2 }}>
          <Box sx={flipContent ? classes.textContainerLeft : classes.textContainerRight}>
            <Typography variant="h4">{content.headline}</Typography>
            <Typography variant="subtitle1" sx={classes.flairText}>{content.flairText}</Typography>
            <Typography variant="body2" sx={classes.shortDescription}>{content.shortDescription}</Typography>
            <Button variant="contained" disableElevation onClick={toggleDialogOpen}>{TEXT.buttonText}</Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProjectCard;
