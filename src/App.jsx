import Navbar from "./components/Navbar";
import Products from "./components/Products";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <div>
      <Navbar />
      <h1 className="mt-4 ml-6  lg:text-3xl font-semibold">
        Welcome to tech-shoi, your everyday gadget hub. Find your favourite
        product from our website.
      </h1>
      <div>
        <div></div>
        <Products />
      </div>
    </div>
  );
};

export default App;
