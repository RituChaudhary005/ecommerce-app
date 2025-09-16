import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com", // Example API
});

export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const getCategories = () => api.get("/products/categories");
