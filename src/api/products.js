import axios from "axios";

const API = axios.create({
  baseURL: "https://crud-backend-api-flame.vercel.app/api",
});

export const getProductsApi = () => API.get("/products");

export const getProductByIdApi = (id) => API.get(`/products/${id}`);

export const createProductApi = (data) => API.post("/products", data);

export const updateProductApi = (id, data) => API.put(`/products/${id}`, data);

export const deleteProductApi = (id) => API.delete(`/products/${id}`);
