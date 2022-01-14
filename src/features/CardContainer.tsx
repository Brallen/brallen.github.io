import React from 'react';

import ContentLayout from '../shared/layout/ContentLayout';
import { DialogProvider } from '../util/DialogContext';
import ProjectCard, { ProjectCardContent } from './ProjectCard';
import ProjectDialog from './ProjectDialog';

type CardContainerProps = Readonly<{
  cards: ProjectCardContent[];
}>;

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <ContentLayout>
      {cards.map((card, index) => (
        <DialogProvider key={`dialogProvider-${index}`}>
          <ProjectCard content={card} flipContent={index % 2 === 1} key={`card-${index}`}/>
          <ProjectDialog content={card} flipContent={index % 2 === 1} key={`dialog-${index}`}/>
        </DialogProvider>
      ))}
    </ContentLayout>
  );
};

export default CardContainer;
