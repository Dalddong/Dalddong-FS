// @ts-nocheck

import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    console.log("가로채기 responseData", responseData);

    return responseData;
  },
  (err) => {
    console.log("axiosInstance res Error", err);
    return Promise.reject(err);
  }
);

export default axiosInstance;
