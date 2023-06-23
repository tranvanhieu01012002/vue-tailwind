import { RouteLocationNamedRaw } from "vue-router";

abstract class Middleware {
  public redirect!: RouteLocationNamedRaw;
  abstract check(): Promise<boolean>;
  abstract redirectTo(): any;
}
export { Middleware };
