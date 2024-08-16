import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [showProducts, setShowProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [brand, setBrand] = useState("");
  const [catagory, setCatagory] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/products/?searchText=${searchText}&brand=${brand}&catagory=${catagory}`
      )
      .then((res) => {
        console.log(res?.data);
        setShowProducts(res?.data);
      });
  }, [searchText, brand, catagory]);

  const authInfo = {
    showProducts,
    setShowProducts,
    user,
    setUser,
    loading,
    setLoading,
    setSearchText,
    setBrand,
    setCatagory,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
