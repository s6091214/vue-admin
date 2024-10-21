import axios from "axios";

// 創建 Axios 實例
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // 替換為你的 API 基礎 URL
  timeout: 10000, // 設置請求超時時間
});

// 添加請求攔截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在發送請求之前做什麼
    // 可以在這裡添加 token 或其他頭部資訊
    const token = localStorage.getItem("token"); // 假設你將 token 存儲在 localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 對請求錯誤做什麼
    return Promise.reject(error);
  }
);

// 添加響應攔截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 對響應數據做什麼
    return response.data; // 直接返回響應數據
  },
  (error) => {
    // 對響應錯誤做什麼
    return Promise.reject(error);
  }
);

export default axiosInstance;
