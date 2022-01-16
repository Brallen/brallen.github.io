import React from 'react';

import { cards } from '../data/cards';
import CardContainer from '../features/CardContainer';
import ContactCard from '../features/ContactCard';
import CopyBlock from '../features/CopyBlock';
import Marquee from '../features/Marquee';

const HomePage: React.FC = () => {
  return (
    <>
      <Marquee />
      <CopyBlock headline="Who am I" text="Hello! I am a 23 year old software engineer currently working for Wacom in their web services department. I enjoy working with front-end web technologies, APIs, and designers to create websites that are intuitive and fast." />
      <CopyBlock headline="Projects" removeBottomPadding/>
      <CardContainer cards={cards}/>
      <CopyBlock headline="Contact" removeBottomPadding />
      <ContactCard />
    </>
  );
};

export default HomePage;
