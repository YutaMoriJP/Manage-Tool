import axios from "axios";
import { stringify } from "qs";

export const SERVER_URL = "/api";

const axiosInstance = axios.create({
  baseURL: SERVER_URL
});

axiosInstance.interceptors.request.use((config) => {
  config.paramsSerializer = (params) => {
    return stringify(params, {
      arrayFormat: "brackets",
      encode: false
    });
  };

  return config;
});

export default axiosInstance;
