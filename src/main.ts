import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { DefaultLayout, AuthLayout } from "./layouts";
import FontAwesomeIcon from "@/icon";
import "@/assets/css/index.css";
import "vue3-circle-progress/dist/circle-progress.css";
import "vue-toast-notification/dist/theme-sugar.css";
import { createPinia } from "pinia";
import "sweetalert2/dist/sweetalert2.min.css";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
const pinia = createPinia();

createApp(App)
  .component("default-layout", DefaultLayout)
  .component("auth-layout", AuthLayout)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
