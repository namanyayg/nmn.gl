// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// let baseUrl = '//104.236.112.180:4242'
let baseUrl = '//localhost:4242'
if (process.env.NODE_ENV === 'development') {
  baseUrl = '//localhost:4242'
}

Vue.axios.defaults.baseURL = baseUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
