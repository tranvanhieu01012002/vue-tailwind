import axios from "axios";
import { useLoadingStore } from "@/stores";

const baseURL = process.env.VUE_APP_BE_URL;
const timeout = 3000;
const instance = axios.create({ baseURL, timeout });

instance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "multipart/form-data";
    const { start } = useLoadingStore();
    start();
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
    return Promise.reject(error);
  }
);
export { instance as fileApi };
