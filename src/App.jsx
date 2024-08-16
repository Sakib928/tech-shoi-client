import Brands from "./components/Brands";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SortingMethods from "./components/SortingMethods";

const App = () => {
  return (
    <div>
      <Navbar />
      <Brands />
      <SortingMethods />
      <Products />
    </div>
  );
};

export default App;
