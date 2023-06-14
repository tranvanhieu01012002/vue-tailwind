import { Axios } from "./axios";
import { useToken } from "@/hooks";

const { getToken } = useToken();

const setupToken = (): string => {
  return `Bearer ${getToken()}`;
};

const instance = new Axios();

instance.getEntity().interceptors.request.use((config) => {
  config.headers["Content-Type"] = "multipart/form-data";
  config.headers.Authorization = setupToken();
  return config;
});

const authApi = instance.getEntity();

export { authApi };
