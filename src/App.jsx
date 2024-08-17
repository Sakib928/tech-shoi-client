import Brands from "./components/Brands";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Products from "./components/Products";
import SortingMethods from "./components/SortingMethods";

const App = () => {
  return (
    <div>
      <Navbar />
      <Brands />
      <SortingMethods />
      <Products />
      <Pagination />
    </div>
  );
};

export default App;
