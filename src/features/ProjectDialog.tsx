import React from 'react';

import { Box, Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import { useDialogState } from '../util/DialogContext';

const classes: { [className: string]: SxProps } = {

};

const TEXT = {
  buttonText: 'Learn More',
};

export type ProjectDialogContent = Readonly<{
  imageUrl: string,
  headline: string,
  flairText: string,
  shortDescription: string,
}>;

type ProjectDialogProps = Readonly<{
  content: ProjectDialogContent,
  flipContent?: boolean,
}>;

// make this so it's only one modal that has content dynamically added using a shared modal content state
// aka like what useDialogState does but with content instead of a bool
const ProjectDialog: React.FC<ProjectDialogProps> = ({ content, flipContent = false }) => {
  const { isDialogOpen, setIsDialogOpen } = useDialogState();

  function toggleDialogOpen(): void {
    setIsDialogOpen((currIsDialogOpen) => !currIsDialogOpen);
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={toggleDialogOpen}
      scroll='paper'
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{flipContent ? 'hello 1' : 'hello 2'}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="scroll-dialog-description"
          tabIndex={-1}
        >

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialogOpen}>Cancel</Button>
        <Button onClick={toggleDialogOpen}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDialog;
