import DashBoard from "@/views/dashboard/DashBoard.vue";
import ProductsViewVue from "@/views/products/product-list/ProductsView.vue";
import CreateProductView from "@/views/products/create-product/CreateProductView.vue";
import OrderView from "@/views/orders/OrderView.vue";
import OrderDetailView from "@/views/orders/order-detail/OrderDetailView.vue";
import CategoryComponent from "@/views/products/categories/CategoryView.vue";
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
        children: [
          {
            path: "",
            component: ProductsViewVue,
            name: "products-list",
          },
          {
            path: "create",
            component: CreateProductView,
            name: "create-product",
          },
        ],
      },
      {
        path: "categories",
        component: CategoryComponent,
        name: "categories",
      },
    ],
  },
  {
    path: "/orders",
    meta: {
      layout: "default",
    },
    children: [
      {
        name: "order",
        path: "",
        component: OrderView,
      },
      {
        name: "order-detail",
        path: ":id",
        component: OrderDetailView,
      },
    ],
  },
];
export default routes;
