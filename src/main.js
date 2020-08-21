import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element.js'
import '@/assets/global.css'
import './assets/font-awesome-4.7.0/css/font-awesome.css'
import store from './store/index'
import axios from 'axios'
Vue.prototype.axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
