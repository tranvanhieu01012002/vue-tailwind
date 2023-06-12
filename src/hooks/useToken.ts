import Cookies from "js-cookie";
const useToken = () => {
  const EXPIRED = 1;
  const KEY = "token";

  const setToken = (token: string, expires = EXPIRED) => {
    Cookies.set(KEY, token, { expires });
  };

  const getToken = (): string => Cookies.get(KEY) ?? "";

  return { setToken, getToken };
};

export { useToken };
