import React from 'react';

import CardContainer from '../features/CardContainer';
import CopyBlock from '../features/CopyBlock';
import Marquee from '../features/Marquee';
import { ProjectCardProps } from '../features/ProjectCard';

const cards: ProjectCardProps[] = [
  {
    imageUrl: 'https://source.unsplash.com/random/800x600',
    headline: 'Headline',
    flairText: 'Flair Text',
    shortDescription: 'Short Description',
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Marquee />
      <CopyBlock headline="Who am I" text="This is the Home Page. It is the default page for the application." />
      <CardContainer cards={cards}/>
    </>
  );
};

export default HomePage;
