import React from 'react';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import Headline from '../shared/partials/Headline';

type CopyBlockProps = Readonly<{
  headline?: string;
  text?: string;
}>;

const CopyBlock: React.FC<CopyBlockProps> = ({ headline, text }) => {
  return (
    <>
      <div id={headline?.toLowerCase().replace(' ', '')} className="anchor"></div>
      <Box component="section" >
        {headline !== undefined && (
          <Headline>{headline}</Headline>
        )}
      </Box>

      <Box component="section" >
        {text !== undefined && (
          <Typography variant="body1" align="center">{text}</Typography>
        )}
      </Box>
    </>
  );
};

export default CopyBlock;
