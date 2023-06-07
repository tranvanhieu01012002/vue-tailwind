import DashBoard from "@/views/dashboard/DashBoard.vue";
import ProductsViewVue from "@/views/products/product-list/ProductsView.vue";
import CreateProductView from "@/views/products/create-product/CreateProductView.vue";
import OrderView from "@/views/orders/OrderView.vue";
import OrderDetailView from "@/views/order-detail/OrderDetailView.vue";
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
  {
    name: "orders",
    path: "/orders",
    component: OrderView,
    meta: {
      layout: "default",
    },
  },
  {
    name: "order-detail",
    path: "/orders/:id",
    component: OrderDetailView,
    meta: {
      layout: "default",
    },
  },
];
export default routes;
