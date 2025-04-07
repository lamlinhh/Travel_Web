import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travel-website-service.onrender.com/",
  headers: {
    "Content-Type": "application/json",  
  },
});

export default axiosInstance;
