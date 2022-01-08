import React from 'react';

import Header from './Header';
import { TitleLink, HeaderLinks } from './HeaderLinks';

const DefaultHeader: React.FC = () => {
  const title: React.ReactNode = <TitleLink />;
  const navigation: React.ReactNode = <HeaderLinks />;
  return <Header title={title} navigation={navigation} />;
};

export default DefaultHeader;
