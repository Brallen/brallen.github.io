import React, { useContext, useState } from 'react';

export type DialogState = Readonly<{
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>

const DialogContext = React.createContext<DialogState>(null);

export const DialogProvider: React.FC = ({ children }) => {
  const [ isDialogOpen, setIsDialogOpen ] = useState<boolean>(false);

  return (
    <DialogContext.Provider value={{ isDialogOpen, setIsDialogOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogState = (): DialogState => useContext(DialogContext);
