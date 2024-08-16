import useAuth from "../hooks/useAuth";

const Products = () => {
  const { showProducts } = useAuth();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {showProducts?.map((product) => {
        return (
          <div
            key={product._id}
            className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 text-gray-900 mx-auto"
          >
            <img
              src={product.image}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-default-600">
                {product.brand}
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                {product.productname}
              </h2>
            </div>
            <p className="text-gray-800">{product.features}</p>
            <p>
              price : <span className="font-bold">${product.price}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
