import DashBoard from "@/views/dashboard/DashBoard.vue";
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
];
export default routes;
