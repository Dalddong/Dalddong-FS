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
    const accessToken = localStorage.getItem("acToken");
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    //응답에 대한 로직
    console.log("가로채기,res", response);

    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
