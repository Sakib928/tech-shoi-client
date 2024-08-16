import Brands from "./components/Brands";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <div>
      <Navbar />
      <Brands />
      <Products />
    </div>
  );
};

export default App;
