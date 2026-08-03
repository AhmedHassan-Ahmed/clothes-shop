import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", 
});

// Get all products
export const getProducts = () => API.get("/products");

// Get single product
export const getProduct = (id) => API.get(`/products/${id}`);

// Create product
export const createProduct = (data) => API.post("/products", data);

// Update
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);

// Delete
export const deleteProduct = (id) =>
  API.delete(`/products/${id}`);