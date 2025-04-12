import axios from "axios";

const API_BASE_URL = "http://localhost:5173/src";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(
      error || { message: "Lỗi kết nối đến API." }
    );
  }
);

export default api;