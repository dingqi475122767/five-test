import Vue from 'vue'
import App from './App.vue'
import router from './router';
import stroe from "./stroe";

Vue.config.productionTip = false

new Vue({
  stroe,
  router,
  render: h => h(App),
}).$mount('#app')
