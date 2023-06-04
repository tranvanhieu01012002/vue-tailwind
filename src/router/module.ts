import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    layout?: string;
    breadcrumb?: boolean;
  }
}

export {};
