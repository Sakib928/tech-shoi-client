import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const useAuth = () => {
  const authInfo = useContext(authContext);
  return authInfo;
};

export default useAuth;
