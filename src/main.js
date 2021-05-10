import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
//导入字体
import './assets/fonts/iconfont.css'

import axios from 'axios'

import CompositionApi from '@vue/composition-api'
import TreeTable from 'vue-table-with-tree-grid'
import { Tree } from 'element-ui'
//配置请求的根路径
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
//请求拦截器（在请求之前进行一些配置）    
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(CompositionApi)

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
