import { authApi } from "@/api";
import router from "@/router";
import { useUserStore } from "@/stores";
import { storeToRefs } from "pinia";
import { Middleware } from "./middleware";

class AuthMiddleware extends Middleware {
  constructor() {
    super();
    this.redirect = {
      name: "login",
    };
  }
  async check(): Promise<boolean> {
    const userStore = useUserStore();
    const { isAuth } = storeToRefs(userStore);
    const { loginSuccess } = userStore;
    if (isAuth.value) {
      return isAuth.value;
    } else {
      try {
        const { status } = await authApi.get("user");
        if (status === 200) {
          loginSuccess();
          return isAuth.value;
        }
      } catch (error) {
        return false;
      }
    }
    return isAuth.value;
  }
  async redirectTo() {
    return await router.push(this.redirect);
  }
}

export { AuthMiddleware };
