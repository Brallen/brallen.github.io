import React from 'react';

import { Box, Container } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  container: {
    pt: 3,
    pb: 3,
    position: 'relative',
  },
  containerNoPB: {
    pt: 3,
    position: 'relative',
  },
};

type ContentLayoutProps = Readonly<{
  altBackgroundColor?: boolean,
  removeBottomPadding?: boolean,
  component?: React.ElementType,
}>;

const ContentLayout: React.FC<ContentLayoutProps> = ({ children, altBackgroundColor=false, removeBottomPadding=false, component='section' }) => {
  const containerStyles = removeBottomPadding ? classes.containerNoPB : classes.container;

  return (
    <Box component={component} sx={{ bgcolor: altBackgroundColor ? 'info.main' : 'background.default' }}>
      <Container fixed maxWidth="md" sx={containerStyles}>
        {children}
      </Container>
    </Box>
  );
};

export default ContentLayout;
