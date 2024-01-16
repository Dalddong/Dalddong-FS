// @ts-nocheck

import axios, { AxiosRequestConfig } from "axios";
import { useUserName } from "@/hooks/user/useUser";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosSessionInstance = axios.create(config);

axiosSessionInstance.interceptors.request.use(
  async (config) => {
    const data = await useUserName();
    if (data?.user.name) {
      return config;
    } else {
      throw "로그인이 필요합니다.";
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosSessionInstance.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    console.log("가로채기 responseData", responseData);
    alert("성공");
    return responseData;
  },
  (err) => {
    alert(err);
    return Promise.reject(err);
  }
);

export default axiosSessionInstance;
