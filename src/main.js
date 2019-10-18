import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
Vue.use(VueRouter)
Vue.use(Mint)
import axios from 'axios'
Vue.prototype.$http=axios
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '../node_modules/swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

import '../node_modules/mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
Vue.prototype.$Indicator = Indicator
import router from './assets/js/router.js'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './assets/js/data.js'
import './assets/font/iconfont.css'
import './assets/css/animate.css'
import './assets/css/default.css'
new Vue({
  el: '#app',
  render: h => h(App),
  // 呈递渲染页面信息
  router,
  // 挂载数据
  store
})
