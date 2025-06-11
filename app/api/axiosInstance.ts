import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.crownelectricmobility.com/api/v1/BenlingWeb/web",
  headers: {
    "Content-Type": "application/json-patch+json",
  },
  timeout: 10000, 
});

export default axiosInstance;