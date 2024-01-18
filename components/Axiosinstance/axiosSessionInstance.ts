// @ts-nocheck

import axios, { AxiosRequestConfig } from "axios";
import { useUserName } from "@/hooks/user/useSessionUser";
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
    console.log("responseData", responseData);
    alert("성공적으로 등록이 완료 되었습니다.");
    return responseData;
  },
  (err) => {
    alert(err);
    return Promise.reject(err);
  }
);

export default axiosSessionInstance;
