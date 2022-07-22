import React, { useState, useContext, createContext } from "react";

type MobileContextType = {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileContext: React.FC = ({ children }: any) => {
  const MobileContext = createContext<MobileContextType | null>(null);

  const [isMobile, setIsMobile] = useState<boolean>(() => false);

  const value = {
    isMobile,
    setIsMobile,
  };

  return (
    <MobileContext.Provider value={value}>{children}</MobileContext.Provider>
  );
};

export default MobileContext;
