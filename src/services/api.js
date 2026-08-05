import axios from "axios";

const api = axios.create({
  baseURL: " https://crud-backend-api-flame.vercel.app/",
});

export default api;
