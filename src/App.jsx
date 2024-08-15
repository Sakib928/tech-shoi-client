import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";

const App = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
