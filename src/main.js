import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueMeta from 'vue-meta'
import elementUI from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueMeta)
Vue.use(elementUI)

new Vue({
  router, //注册/配置路由器
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
