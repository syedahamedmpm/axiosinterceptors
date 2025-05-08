import axios from "axios";

const token = "eyyeyyeyyeyyeyyeyyeyyeyyeyyeyyeyyeyy";
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Config", config);
    config.headers.Authorization = `Bearer ${token}`;
    console.log("Config 2", config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    console.log("response data", response?.data);
    return response?.data;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
