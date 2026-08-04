import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import {
  getProductsApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
} from "../api/products";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getProductsApi();

        setProducts(response.data.products || response.data.data);
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
      const response = await createProductApi(newProduct);

      setProducts((prevProducts) => [...prevProducts, response.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteProductApi(id);

      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const response = await updateProductApi(id, updatedProduct);

      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? response.data.data : product,
        ),
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        deleteProduct,
        setProducts,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
