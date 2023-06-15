import { Middleware } from "@/middleware/middleware";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router-array";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const result = await handleMiddleware(to.meta.middleware);
  if (result) {
    next();
  }
});

const handleMiddleware = async (
  middlewareArr: Array<Middleware> | undefined
) => {
  if (middlewareArr) {
    for (let index = 0; index < middlewareArr.length; index++) {
      const result = await middlewareArr[index].check();
      if (!result) {
        middlewareArr[index].redirectTo();
        return false;
      }
    }
  }
  return true;
};
export default router;
