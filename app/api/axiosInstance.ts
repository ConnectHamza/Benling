import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.0.0.80:8040/api/v3/Benling/web",
  headers: {
    "Content-Type": "application/json-patch+json",
  },
  timeout: 10000, 
});

export default axiosInstance;