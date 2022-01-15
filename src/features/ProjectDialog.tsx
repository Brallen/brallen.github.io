import React from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { SxProps } from '@mui/system';

import { useDialogState } from '../util/DialogContext';

const classes: { [className: string]: SxProps } = {

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
      <DialogTitle id="scroll-dialog-title">{dialogContent?.text}</DialogTitle>
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
