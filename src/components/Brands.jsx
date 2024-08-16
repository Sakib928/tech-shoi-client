const Brands = () => {
  const brands = ["apple", "samsung", "xiaomi", "realme"];
  return (
    <div className="flex gap-2 my-2 flex-wrap ml-4">
      {brands.map((brand, idx) => {
        return (
          <button
            key={idx}
            type="button"
            className="p-2 rounded-full border border-gray-800 font-medium"
          >
            {brand}
          </button>
        );
      })}
    </div>
  );
};

export default Brands;
