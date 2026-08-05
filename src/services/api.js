import axios from "axios";

const api = axios.create({
  baseURL: " https://crud-backend-api-flame.vercel.app/api",
});

export default api;
