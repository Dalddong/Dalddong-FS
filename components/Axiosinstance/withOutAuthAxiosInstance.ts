// @ts-nocheck

import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const withOutAuthAxiosInstance = axios.create(config);

withOutAuthAxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
withOutAuthAxiosInstance.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    console.log("no auth 가로채기 responseData", responseData);

    return response;
  },
  (err) => {
    console.log("withOutAuthAxiosInstance res Error", err);
    return Promise.reject(err);
  }
);

export default withOutAuthAxiosInstance;
