import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DefaultLayoutVue from "./layouts/default/DefaultLayout.vue";
import FontAwesomeIcon from "@/icon";
import "@/assets/css/index.css";
createApp(App)
  .component("default-layout", DefaultLayoutVue)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
