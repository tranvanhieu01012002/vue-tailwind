import { Middleware } from "@/middleware/middleware";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    layout?: string;
    breadcrumb?: boolean;
    middleware?: Array<Middleware>;
  }
}

export {};
