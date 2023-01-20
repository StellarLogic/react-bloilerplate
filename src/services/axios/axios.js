import Axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const axiosInstance = Axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
