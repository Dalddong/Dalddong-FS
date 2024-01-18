// @ts-nocheck

import axios, { AxiosRequestConfig } from "axios";
import { useUserName } from "@/hooks/user/useSessionUser";
import {
  UNAUTHORIZE_LOGIN,
  SUCCESS_PATCH,
} from "@/utils/constants/alertMessages";
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
      throw UNAUTHORIZE_LOGIN;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosSessionInstance.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    alert(SUCCESS_PATCH);
    return responseData;
  },
  (err) => {
    alert(err);
    return Promise.reject(err);
  }
);

export default axiosSessionInstance;
