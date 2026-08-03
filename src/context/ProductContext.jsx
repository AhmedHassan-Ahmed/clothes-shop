import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get("/products");
        console.log(response.data);
        setProducts(response.data.products || response.data.data || response.data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  const addProduct = async (newProduct) => {
  try {
    const response = await api.post(
      "/products",
      newProduct
    );
    setProducts([
      ...products,
      response.data
    ]);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <ProductContext.Provider
      value={{ products, loading, error, addProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);