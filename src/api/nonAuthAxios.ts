import { Axios } from "./axios";

const instance = new Axios();

instance.getEntity().interceptors.request.use((config) => {
  config.headers["Content-Type"] = "multipart/form-data";
  return config;
});

const nonAuthApi = instance.getEntity();
export { nonAuthApi };
