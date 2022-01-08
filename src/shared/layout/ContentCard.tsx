import React from 'react';

import { Box, Card, Container } from '@mui/material';
import { SxProps } from '@mui/system';

const classes: { [className: string]: SxProps } = {
  bgWhite: {
    backgroundColor: 'background.paper',
  },
  bgLight: {
    backgroundColor: 'background.default',
  },
  bgDark: {
    backgroundColor: 'grey.900',
  },
  container: {
    paddingTop: 7,
    paddingBottom: 4.5,
    position: 'relative',
  },
  cardWhite: {
    backgroundColor: 'background.paper',
  },
  cardDark: {
    backgroundColor: 'common.black',
    color: 'common.white',
  },
  cardNoPadding: {
    borderRadius: '15px',
  },
  card: {
    borderRadius: '15px',
    padding: 5,
  },
  wrapper: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    left: '16px',
    top: '-20px',
  },
};

export type ContentCardProps = Readonly<{
  pillHeadline?: string;
  removeCardPadding?: boolean;
  bgColor?: string;
  cardColor?: string;
}>;

const BgColors: Record<string, string> = {
  White: 'bgWhite',
  Light: 'bgLight',
  Dark: 'bgDark',
};

const CardColors: Record<string, string> = {
  White: 'cardWhite',
  Dark: 'cardDark',
};

const ContentCard: React.FC<ContentCardProps> = ({ children, removeCardPadding, bgColor = 'Light', cardColor = 'White' }) => {
  const cardPadding = removeCardPadding ? classes.cardNoPadding : classes.card;

  return (
    <Box component="section" sx={classes[BgColors[bgColor]]}>
      <Container fixed sx={classes.container}>
        <Box sx={classes.wrapper}>
          <Card raised elevation={6}>
            {children}
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default ContentCard;
