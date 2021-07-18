import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import VueTyperPlugin from 'vue-typer';

Vue.use(VueTyperPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
