import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

import "@/assets/css/tailwind.css";
import "@/assets/css/main.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
