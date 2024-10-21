import axiosInstance from "./axiosInstance";

/**
 * 獲取用戶資料的 API 函數
 *
 * @returns {Promise} - 返回一個 Promise，解析為用戶資料
 *
 * 使用範例：
 * getUser().then(data => {
 *   console.log(data);
 * }).catch(error => {
 *   console.error("獲取用戶資料失敗:", error);
 * });
 */
export const getUser = () => {
  return axiosInstance.get("/users");
};
