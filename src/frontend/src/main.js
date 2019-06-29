import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";


import vSuggest from 'v-suggest';
import Paginate from 'vuejs-paginate'

import "@/assets/css/tailwind.css";
import "@/assets/css/main.css";

Vue.config.productionTip = false;

Vue.use(vSuggest);
Vue.component('paginate', Paginate)

new Vue({
  router,
  store,
  beforeCreate(){
    store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount("#app");
