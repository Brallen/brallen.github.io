import React from 'react';

import { Typography } from '@mui/material';

import ContentLayout from '../shared/layout/ContentLayout';
import Headline from '../shared/partials/Headline';

type CopyBlockProps = Readonly<{
  headline?: string;
  text?: string;
  removeBottomPadding?: boolean;
}>;

const CopyBlock: React.FC<CopyBlockProps> = ({ headline, text, removeBottomPadding = false }) => {
  return (
    <ContentLayout removeBottomPadding={removeBottomPadding}>
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
