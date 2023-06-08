import DashBoard from "@/views/dashboard/DashBoard.vue";
import ProductsViewVue from "@/views/products/product-list/ProductsView.vue";
import CreateProductView from "@/views/products/create-product/CreateProductView.vue";
import OrderView from "@/views/orders/OrderView.vue";
import OrderDetailView from "@/views/orders/order-detail/OrderDetailView.vue";
import CategoryView from "@/views/products/categories/CategoryView.vue";
import CreateCategoryView from "@/views/products/categories/create-category/CreateCategoryView.vue";
import { RouteRecordRaw } from "vue-router";

const DEFAULT_LAYOUT = "default";
const PATH_CREATE = "create";
const routes: Array<RouteRecordRaw> = [
  {
    name: "dashboard",
    path: "/",
    component: DashBoard,
    meta: {
      layout: DEFAULT_LAYOUT,
    },
  },
  {
    path: "/products",
    meta: {
      layout: DEFAULT_LAYOUT,
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
            path: PATH_CREATE,
            component: CreateProductView,
            name: "create-product",
          },
        ],
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            component: CategoryView,
            name: "categories",
          },
          {
            path: PATH_CREATE,
            component: CreateCategoryView,
            name: "create-categories",
          },
        ],
      },
    ],
  },
  {
    path: "/orders",
    meta: {
      layout: DEFAULT_LAYOUT,
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
