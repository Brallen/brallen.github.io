import React from 'react';

import { Typography } from '@mui/material';

import ContentLayout from '../shared/layout/ContentLayout';
import Headline from '../shared/partials/Headline';

type CopyBlockProps = Readonly<{
  headline?: string;
  text?: string;
}>;

const CopyBlock: React.FC<CopyBlockProps> = ({ headline, text }) => {
  return (
    <ContentLayout>
      {headline !== undefined && (
        <Headline>{headline}</Headline>
      )}

      {text !== undefined && (
        <Typography variant="body1" align="center">{text}</Typography>
      )}
    </ContentLayout>
  );
};

export default CopyBlock;
