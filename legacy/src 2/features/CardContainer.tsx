import React from 'react';

import ContentLayout from '../shared/layout/ContentLayout';
import ProjectCard from '../shared/partials/ProjectCard';
import ProjectDialog from '../shared/partials/ProjectDialog';
import { ProjectCardContent } from '../shared/types/types';
import { DialogProvider } from '../util/DialogContext';

type CardContainerProps = Readonly<{
  cards: ProjectCardContent[];
}>;

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <ContentLayout>
      <DialogProvider>
        {cards.map((card, index) => (
          <ProjectCard content={card} flipContent={index % 2 === 1} key={`card-${index}`}/>
        ))}
        <ProjectDialog />
      </DialogProvider>
    </ContentLayout>
  );
};

export default CardContainer;
