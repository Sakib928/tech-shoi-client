import { createContext } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "sakib hasan",
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
