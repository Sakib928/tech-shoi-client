import Brands from "./components/Brands";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
};

export default App;
