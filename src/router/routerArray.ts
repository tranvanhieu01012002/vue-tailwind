import DashBoard from "@/views/dashboard/DashBoard.vue";
import ProductsViewVue from "@/views/products/ProductsView.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "dashboard",
    path: "/",
    component: DashBoard,
    meta: {
      layout: "default",
      breadcrumb: false,
    },
  },
  {
    name: "products",
    path: "/products",
    component: ProductsViewVue,
    meta: {
      layout: "default",
      breadcrumb: true,
    },
  },
];
export default routes;
