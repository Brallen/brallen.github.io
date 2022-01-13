import React from 'react';

import ContentLayout from '../shared/layout/ContentLayout';
import ProjectCard, { ProjectCardContent } from './ProjectCard';

type CardContainerProps = Readonly<{
  cards: ProjectCardContent[];
}>;

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <ContentLayout>
      {cards.map((card, index) => (
        <ProjectCard content={card} flipContent={index % 2 === 1} key={`card-${index}`}/>
      ))}
    </ContentLayout>
  );
};
{/* <ProjectModal content={card.node} /> */}

export default CardContainer;
