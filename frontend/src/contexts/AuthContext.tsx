import React, { useState, createContext, useContext } from "react";

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext: React.FC<React.ReactNode> = ({ children }: any) => {
  const AuthContext = createContext<AuthContextType | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(() => false);

  const value = {
    // todo /
    isLogged,
    setIsLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export const UseAuth = useContext<React.ReactNode>(AuthContext);

export default AuthContext;
