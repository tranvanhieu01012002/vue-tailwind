import axios, { AxiosInstance } from "axios";
import { useLoadingStore } from "@/stores";
const baseURL = process.env.VUE_APP_BE_URL;
const timeout = 15000;

class Axios {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL, timeout });
    this.configRequest();
    this.configResponse();
  }

  public configRequest() {
    this.instance.interceptors.request.use(
      (config) => {
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
  }

  public configResponse() {
    this.instance.interceptors.response.use(
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
  }

  public getEntity() {
    return this.instance;
  }
}
export { Axios };
