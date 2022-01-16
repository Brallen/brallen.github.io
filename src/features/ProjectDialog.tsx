import React from 'react';

import { Button, Dialog, DialogContent, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import { useDialogState } from '../util/DialogContext';

const classes: { [className: string]: SxProps } = {
  dialogContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  title: {
    py: 2,
    px: 3,
  },
};

const TEXT = {
  buttonText: 'Learn More',
};

// make this so it's only one modal that has content dynamically added using a shared modal content state
// aka like what useDialogState does but with content instead of a bool
const ProjectDialog: React.FC = () => {
  const { dialogContent, isDialogOpen, setIsDialogOpen } = useDialogState();

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
      <Typography id="scroll-dialog-title" variant="h3" sx={classes.title}>Headline</Typography>
      <DialogContent sx={classes.dialogContent}>
        <ul>
          {dialogContent?.keyPoints.map((item, index) => (
            <Typography key={`keyPoint-${index}`} component={'li'} variant="body2">{item}</Typography>
          ))}
        </ul>
        <Button variant="contained" href={dialogContent?.linkUrl} rel="noreferrer nofollow" target="_blank">{dialogContent?.linkText}</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
