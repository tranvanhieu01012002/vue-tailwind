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
    showLoad("start");
    return config;
  },
  (error) => {
    showLoad("done");
    return console.log(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    showLoad("done");
    return response;
  },
  (error) => {
    showLoad("startWithTime");
    return error.response;
  }
);

const setupToken = (): string => {
  return `Bearer ${getToken()}`;
};

const showLoad = (state: string) => {
  const { startWithTime, done, start } = useLoadingStore();
  const loading: any = {
    start: start(),
    done: done(),
    startWithTime: startWithTime(2),
  };
  return loading[state];
};
export { instance as api };
