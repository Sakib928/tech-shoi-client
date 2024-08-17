import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const { user } = useAuth();
  const searchRef = useRef();
  const { setSearchText, logout } = useAuth();
  const handleSearch = () => {
    setSearchText(searchRef.current.value);
  };
  const navigate = useNavigate();
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      setSearchText(searchRef.current.value);
    }
  };

  const handleUser = () => {
    if (user) {
      logout().then(toast.success("logged out"));
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex justify-between place-items-center w-full mt-2">
      <Toaster />
      <div onClick={() => window.location.reload()}>
        <img src={logo} alt="logo" className="w-28" />
      </div>
      <div className="flex">
        <div className="relative flex items-center mt-2 mr-2 md:mr-10">
          <button className="absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto">
            <FaSearch onClick={handleSearch} />
          </button>

          <input
            ref={searchRef}
            onKeyDown={handleEnterSearch}
            type="text"
            placeholder="search"
            className="block w-full py-2.5  placeholder-gray-400/70 bg-white border border-gray-600 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <button
          onClick={handleUser}
          type="button"
          className="px-6 mr-4 font-semibold rounded dark:bg-gray-800 dark:text-gray-100"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
