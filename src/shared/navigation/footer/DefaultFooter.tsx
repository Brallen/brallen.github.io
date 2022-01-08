import React from 'react';

import { Typography } from '@mui/material';

import Footer from './Footer';

const TEXT = {
  legal: '©2021 Brett Case. Trademarks and brands are property of their respective owners.',
};

const DefaultHeader: React.FC = () => {
  const legal = <Typography variant="body2">{TEXT.legal}</Typography>;

  return <Footer legal={legal} />;
};

export default DefaultHeader;
