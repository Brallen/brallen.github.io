import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogContent, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

import { useDialogState } from '../../util/DialogContext';
import Carousel from './Carousel';

const classes: { [className: string]: SxProps } = {
  container: {
    '.MuiDialog-paper': {
      borderRadius: '15px',
    },
  },
  dialogContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    pt: 0,
  },
  closeIcon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
  },
  title: {
    py: 2,
    px: 3,
    textAlign: 'center',
  },
};

const ProjectDialog: React.FC = () => {
  const { dialogContent, isDialogOpen, setIsDialogOpen } = useDialogState();

  function toggleDialogOpen(): void {
    setIsDialogOpen((currIsDialogOpen) => !currIsDialogOpen);
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={toggleDialogOpen}
      sx={classes.container}
      scroll='paper'
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <CloseIcon onClick={toggleDialogOpen} sx={classes.closeIcon} />
      <Typography id="scroll-dialog-title" variant="h3" sx={classes.title}>{dialogContent?.headline}</Typography>
      <DialogContent sx={classes.dialogContent}>
        <Carousel images={dialogContent?.images}/>
        <ul>
          {dialogContent?.keyPoints.map((item, index) => (
            <Typography key={`keyPoint-${index}`} component={'li'} variant="body2">{item}</Typography>
          ))}
        </ul>
        <Button variant="contained" disableElevation href={dialogContent?.link.url} rel="noreferrer nofollow" target="_blank">{dialogContent?.link.text}</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
