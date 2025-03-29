import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travel-website-service.onrender.com/",
});

export default axiosInstance;
