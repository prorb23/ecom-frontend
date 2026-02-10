import axios from "axios";

const api = axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_URL}/api`,
});

export const fetchProductsApi = () => {
  return api.get("/public/products");
};


export default api;