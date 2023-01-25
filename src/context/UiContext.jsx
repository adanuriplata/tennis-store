import React, { createContext, useState, useContext } from 'react';

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState();
  const exposed = {
    openMenu,
    setOpenMenu,
  };
  return <UiContext.Provider value={exposed}>{children}</UiContext.Provider>;
};

export const useUiContext = () => useContext(UiContext);
