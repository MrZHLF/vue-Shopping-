import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookies';
import store from './store/index'


Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: require('./../public/imgs/loading-svg/loading-bars.svg')
})


// const mock = false
// if (mock) {
//   require('./mock/api')
// }

// import env from './env'
Vue.config.productionTip = false

axios.defaults.baseURL = '/api'
// 请求时间
axios.defaults.timeout = 8000
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  let path = location.hash
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }

  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')