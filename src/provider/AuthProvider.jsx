// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();

export const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [showProducts, setShowProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const itemsPerPage = 6;
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    showProducts,
    setShowProducts,
    user,
    setUser,
    setSearchText,
    setBrand,
    setCategory,
    pages,
    currentPage,
    setCurrentPage,
    createUser,
    login,
    googleLogin,
    logout,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
