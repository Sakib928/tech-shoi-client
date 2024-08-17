import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const SortingMethods = () => {
  const { showProducts, setShowProducts } = useAuth();
  const [range, setRange] = useState(0);

  const handlePriceRange = (e) => {
    setRange(e.target.value);
    console.log(e.target.value);
  };

  const sortbydate = () => {
    const newArray = [...showProducts]?.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    console.log(newArray);
    setShowProducts(newArray);
  };

  const sortbyprice = (type) => {
    if (type == 1) {
      const newArray = [...showProducts]?.sort((a, b) => a.price - b.price);
      console.log(newArray);
      setShowProducts(newArray);
    } else {
      const newArray = [...showProducts]?.sort((a, b) => b.price - a.price);
      setShowProducts(newArray);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/price-range?range=${range}`)
      .then((res) => setShowProducts(res.data));
  }, [range]);

  return (
    <div className="ml-4 md:flex gap-2">
      <select
        onChange={handlePriceRange}
        className="border border-gray-300 rounded-lg p-2"
      >
        <option defaultValue="0" disabled selected>
          Select Price Range
        </option>
        <option value="1000">0-1000</option>
        <option value="2000">1000-2000</option>
        <option value="3000">2000-3000</option>
      </select>

      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 border-2">
          Sort by
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={sortbydate}>
            <a>date: newest first</a>
          </li>
          <li onClick={() => sortbyprice(1)}>
            <a>price: low to high</a>
          </li>
          <li onClick={() => sortbyprice(2)}>
            <a>price: high to low</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingMethods;
