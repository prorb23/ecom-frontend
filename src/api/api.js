import axios from "axios";

const api = axios.create({
    baseURL:`${import.meta.env.VITE_BACKEND_URL}/api`,
});


dispatch({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: response.data, // must contain `content`
});

export default api;