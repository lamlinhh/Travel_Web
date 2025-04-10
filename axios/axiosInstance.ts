import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travel-website-service.onrender.com",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  timeout: 15000
});

// Thêm interceptor để log request
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Đang gửi request đến:', `${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('Lỗi khi gửi request:', error);
    return Promise.reject(error);
  }
);

// Thêm interceptor để log response
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Nhận response thành công');
    return response;
  },
  (error) => {
    console.error('Lỗi API:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
