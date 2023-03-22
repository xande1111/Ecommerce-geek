import { createContext } from "react";


export const LoginContext = createContext({});

export function LoginContextProvider({ children }) {
  const nome = "Pareci";

  return (
    <LoginContext.Provider value={{ nome }}>{children}</LoginContext.Provider>
  );
}
