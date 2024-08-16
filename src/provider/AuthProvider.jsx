import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setShowProducts(res.data);
    });
  }, []);
  const authInfo = {
    showProducts,
    setShowProducts,
    user,
    setUser,
    loading,
    setLoading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
