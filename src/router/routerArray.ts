import DashBoard from "@/views/dashboard/DashBoard.vue";
import ProductsViewVue from "@/views/products/product-list/ProductsView.vue";
import CreateProductView from "@/views/products/create-product/CreateProductView.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "dashboard",
    path: "/",
    component: DashBoard,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/products",
    meta: {
      layout: "default",
    },
    children: [
      {
        path: "product-list",
        component: ProductsViewVue,
        name: "products-list",
      },
      {
        path: "categories",
        component: ProductsViewVue,
        name: "categories",
      },
      {
        path: "create",
        component: CreateProductView,
        name: "create-product",
      },
    ],
  },
];
export default routes;
