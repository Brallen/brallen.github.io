import React, { useContext, useState } from 'react';

export type Reference = React.MutableRefObject<HTMLHeadingElement>;

type ScrollTargetsProps = Readonly<{
  scrollTargets: Reference[];
  setScrollTargets: React.Dispatch<React.SetStateAction<Reference[]>>;
}>

const ScrollTargetsContext = React.createContext<ScrollTargetsProps>(null);

export const ScrollTargetsProvider: React.FC = ({ children }) => {
  const [ scrollTargets, setScrollTargets ] = useState<Reference[]>([]);

  return (
    <ScrollTargetsContext.Provider value={{ scrollTargets, setScrollTargets }}>
      {children}
    </ScrollTargetsContext.Provider>
  );
};

export const useScrollTargets = (): ScrollTargetsProps => useContext(ScrollTargetsContext);
