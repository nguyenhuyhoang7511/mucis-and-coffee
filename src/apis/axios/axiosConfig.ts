import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

// Thay thế 'YOUR_API_ENDPOINT' bằng địa chỉ cơ sở của API của bạn
const API_ENDPOINT = 'YOUR_API_ENDPOINT';

// Thay thế 'YOUR_ACCESS_TOKEN_KEY' bằng khóa lưu trữ accessToken trong localStorage
const STORAGE_KEYS = {
  accessToken: 'YOUR_ACCESS_TOKEN_KEY',
};

// Định nghĩa kiểu dữ liệu Response
export type Response<T> = AxiosResponse<T>['data'] & {
  message?: string;
  status: number;
};

// Khởi tạo đối tượng Axios với cấu hình
const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  baseURL: API_ENDPOINT,
});

// Thêm interceptor cho yêu cầu
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Lấy token từ localStorage
    const token = localStorage.getItem(STORAGE_KEYS.accessToken);

    // Khởi tạo headers hoặc sử dụng headers từ cấu hình yêu cầu
    const headers = config.headers ?? {};

    // Nếu có token, thêm vào tiêu đề Authorization
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    // Cập nhật headers trong cấu hình yêu cầu
    config.headers = {
      ...headers,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };

    // Nếu là yêu cầu 'POST', 'PUT', hoặc 'DELETE', chuyển đổi dữ liệu và params thành chuỗi
    if (
      config.method === 'POST' ||
      config.method === 'PUT' ||
      config.method === 'DELETE'
    ) {
      config.data = qs.stringify(config.data);
      config.params = qs.stringify(config.params);
    }

    return config;
  },
  function (error: any) {
    // Xử lý lỗi nếu cần
    return Promise.reject(error);
  }
);

export default axiosClient;
