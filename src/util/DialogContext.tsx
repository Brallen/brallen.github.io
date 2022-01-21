import React, { useContext, useState } from 'react';

import { DialogContent } from '../shared/types/types';


type DialogState = Readonly<{
  dialogContent: DialogContent;
  setDialogContent: React.Dispatch<React.SetStateAction<DialogContent>>;

  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>

const DialogContext = React.createContext<DialogState>(null);

export const DialogProvider: React.FC = ({ children }) => {
  const [ isDialogOpen, setIsDialogOpen ] = useState<boolean>(false);
  const [ dialogContent, setDialogContent ] = useState<DialogContent>(null);

  return (
    <DialogContext.Provider value={{ dialogContent, setDialogContent, isDialogOpen, setIsDialogOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogState = (): DialogState => useContext(DialogContext);
