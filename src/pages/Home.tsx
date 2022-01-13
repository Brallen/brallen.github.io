import React from 'react';

import CardContainer from '../features/CardContainer';
import CopyBlock from '../features/CopyBlock';
import Marquee from '../features/Marquee';
import { ProjectCardContent } from '../features/ProjectCard';

const cards: ProjectCardContent[] = [
  {
    imageUrl: 'https://source.unsplash.com/random/800x600',
    headline: 'Headline',
    flairText: 'Flair Text',
    shortDescription: 'Short Description',
  },
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
      <CopyBlock headline="Who am I" text="Hello! I am a 23 year old software engineer currently working for Wacom in their web services department. I enjoy working with front-end web technologies, APIs, and designers to create websites that are intuitive and fast." />
      <CopyBlock headline="Projects" removeBottomPadding/>
      <CardContainer cards={cards}/>
      <CopyBlock headline="Contact" />
    </>
  );
};

export default HomePage;
