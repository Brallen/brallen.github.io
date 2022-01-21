import React from 'react';

import { Link as MuiLink, TypographyProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';

const classes: { [className: string]: SxProps } = {
  link: {
    color: 'text.primary',
    transition: 'color .2s ease-in-out',
    textDecoration: 'none',

    '&:hover': {
      color: 'primary.main',
    },
  },
};

export interface NavigationLinkProps {
  text: string;
  url: string;
  variant?: TypographyProps['variant'];
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ text, url, variant }) => {
  const linkVariant = variant || 'h6';
  return (
    <MuiLink sx={classes.link} variant={linkVariant} component={RouterLink} to={url}>
      {text}
    </MuiLink>
  );
};

export default NavigationLink;
