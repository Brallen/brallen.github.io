import React from 'react';

import { Container } from '@mui/material';
import { SxProps } from '@mui/system';

import ProjectCard, { ProjectCardProps } from './ProjectCard';

const classes: { [className: string]: SxProps } = {

};

type CardContainerProps = Readonly<{
  cards: ProjectCardProps[];
}>;

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <Container component="section" maxWidth="md" sx={classes.background}>
      {cards.map((card, index) => (
        <div key={`card-${index}`}>
          <ProjectCard
            imageUrl={card.imageUrl}
            headline={card.headline}
            flairText={card.flairText}
            shortDescription={card.shortDescription} />
          {/* <ProjectModal content={card.node} /> */}
        </div>
      ))}
    </Container>
  );
};

export default CardContainer;
