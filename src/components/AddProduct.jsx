import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onsubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:5000/product", data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("added product successfully");
      }
    });
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add Product
      </h2>
      <Toaster />
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Brand Name
            </label>
            <input
              {...register("brand")}
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Product Name
            </label>
            <input
              {...register("productname")}
              id="emailAddress"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Category
            </label>
            <input
              {...register("category")}
              id="password"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Price
            </label>
            <input
              {...register("price")}
              id="passwordConfirmation"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Date
            </label>
            <input
              {...register("date")}
              id="password"
              type="date"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Features
            </label>
            <input
              {...register("features")}
              id="password"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>{" "}
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Product Image
            </label>
            <input
              {...register("image")}
              id="password"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
