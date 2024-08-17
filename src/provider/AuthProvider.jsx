// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [showProducts, setShowProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const itemsPerPage = 6;
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/products/?searchText=${searchText}&brand=${brand}&category=${category}&page=${currentPage}`
      )
      .then((res) => {
        // console.log(res?.data);
        setShowProducts(res?.data);
      });
  }, [searchText, brand, category, currentPage]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/productsCount")

      .then((res) => {
        setCount(res.data.count);
      });
  }, []);

  const authInfo = {
    showProducts,
    setShowProducts,
    user,
    setUser,
    loading,
    setLoading,
    setSearchText,
    setBrand,
    setCategory,
    pages,
    currentPage,
    setCurrentPage,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
