import React, { createContext, useState } from 'react';
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isGuest, setIsGuest] = useState(false);

  return (
    <GlobalContext.Provider value={{ isGuest, setIsGuest }}>{children}</GlobalContext.Provider>
  );
};
