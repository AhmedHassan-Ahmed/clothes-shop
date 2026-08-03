import { useEffect, useState } from "react";
import api from "../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/products");

      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    loading,
    error,
    getProducts,
  };
};

export default useProducts;