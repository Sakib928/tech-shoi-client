import useAuth from "../hooks/useAuth";

const Brands = () => {
  const brands = ["apple", "samsung", "xiaomi", "realme"];
  const categories = ["Laptop", "Tablet", "Smartphone", "Accessories"];
  const { setBrand, setCategory } = useAuth();

  return (
    <div className="my-2">
      <div className="flex gap-2 my-2 flex-wrap ml-4">
        {brands.map((brand, idx) => {
          return (
            <button
              onClick={() => setBrand(brand)}
              key={idx}
              type="button"
              className="p-2 rounded-full border border-gray-800 font-medium"
            >
              {brand}
            </button>
          );
        })}
      </div>
      <div className="flex gap-2 my-2 flex-wrap ml-4">
        {categories.map((category, idx) => {
          return (
            <button
              onClick={() => setCategory(category)}
              key={idx}
              type="button"
              className="p-2 rounded-full border border-gray-800 font-medium"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
