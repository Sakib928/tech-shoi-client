import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between place-items-center w-full">
      <div>
        <img src={logo} alt="logo" className="w-28" />
        <h1></h1>
      </div>
      <div>
        <div className="relative flex items-center mt-2 mr-2">
          <button className="absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto">
            <FaSearch />
          </button>

          <input
            type="text"
            placeholder="search"
            className="block w-full py-2.5  placeholder-gray-400/70 bg-white border border-gray-600 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 text-gray-300  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
