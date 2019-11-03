import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/umd/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype,'$http',{
  value:axios
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
