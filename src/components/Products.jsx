import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Products = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products");
      return res.data;
    },
  });
  console.log(products);
  return <div>this is products page.</div>;
};

export default Products;
