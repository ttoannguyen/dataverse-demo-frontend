import axios from "axios";

// const API_BASE_URL = "https://67f9f9e4094de2fe6ea2cd03.mockapi.io/api/v1";
// const API_BASE_URL = "http://localhost:5173/src/data";
const API_BASE_URL = "https://raw.githubusercontent.com/ttoannguyen/dataverse-demo-frontend/refs/heads/main/src/data";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  // withCredentials: true,
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