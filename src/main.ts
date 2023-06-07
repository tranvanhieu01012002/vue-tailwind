import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DefaultLayoutVue from "./layouts/default/DefaultLayout.vue";
import FontAwesomeIcon from "@/icon";
import "@/assets/css/index.css";
import "vue3-circle-progress/dist/circle-progress.css";
import "vue-toast-notification/dist/theme-sugar.css";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .component("default-layout", DefaultLayoutVue)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
