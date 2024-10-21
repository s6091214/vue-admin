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
  return axiosInstance.get("/user");
};

/**
 * 登入 API 函數
 *
 * @param {Object} data - 用戶的登錄憑證
 * @param {string} data.username - 用戶名
 * @param {string} data.password - 密碼
 * @returns {Promise} - 返回一個 Promise，解析為登入結果
 *
 * 使用範例：
 * login({ username: 'admin', password: '123456' })
 *   .then(data => {
 *     console.log("登入成功:", data);
 *   })
 *   .catch(error => {
 *     console.error("登入失敗:", error);
 *   });
 */
export const login = (data) => {
  return axiosInstance.post("/login", data);
};
