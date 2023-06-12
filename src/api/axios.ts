import axios from "axios";
import { useLoadingStore } from "@/stores";
import { useToken } from "@/hooks";

const { getToken } = useToken();
const baseURL = process.env.VUE_APP_BE_URL;
const timeout = 3000;
const instance = axios.create({ baseURL, timeout });

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = setupToken();
    config.headers.Accept = "application/json";
    const { start } = useLoadingStore();
    start();
    console.log("make request");
    return config;
  },
  (error) => {
    const { done } = useLoadingStore();
    done();
    return error;
  }
);

instance.interceptors.response.use(
  (response) => {
    const { done } = useLoadingStore();
    done();
    return response;
  },
  (error) => {
    const { startWithTime } = useLoadingStore();
    startWithTime(2);
    console.log(error);
    return Promise.reject(error);
  }
);

const setupToken = (): string => {
  return `Bearer ${getToken()}`;
};

export { instance as api };
