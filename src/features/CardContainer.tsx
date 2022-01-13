import React from 'react';

import ContentLayout from '../shared/layout/ContentLayout';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

type CardContainerProps = Readonly<{
  cards: ProjectCardProps[];
}>;

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <ContentLayout>
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
    </ContentLayout>
  );
};

export default CardContainer;
