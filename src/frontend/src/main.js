import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import vSuggest from 'v-suggest';

Vue.config.productionTip = false;

Vue.use(vSuggest);

import "@/assets/css/tailwind.css";
import "@/assets/css/main.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
