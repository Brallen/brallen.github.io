import React from 'react';

import { Box, Container } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  container: {
    paddingTop: 7,
    paddingBottom: 4.5,
    position: 'relative',
  },
};

const ContentLayout: React.FC = ({ children }) => {
  return (
    <Box component="section" >
      <Container fixed sx={classes.container}>
        {children}
      </Container>
    </Box>
  );
};

export default ContentLayout;
