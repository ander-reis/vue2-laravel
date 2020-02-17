// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'
import router from './router'
import VuexStore from './vuex/store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = process.env.SERVER

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4NjU1NjczZjJjZmZhZjQ5Y2E0ZjY1YjljMmUxZmFjZjI4MGEyYTRhOGZkNGEyYzM2YjVlZjY4OTQzZmIyOGM1NDJjNTliZTE2YTg5OTk2In0.eyJhdWQiOiIyIiwianRpIjoiYzg2NTU2NzNmMmNmZmFmNDljYTRmNjViOWMyZTFmYWNmMjgwYTJhNGE4ZmQ0YTJjMzZiNWVmNjg5NDNmYjI4YzU0MmM1OWJlMTZhODk5OTYiLCJpYXQiOjE1NjAzNDgzMjEsIm5iZiI6MTU2MDM0ODMyMSwiZXhwIjoxNTY4OTg4MzE5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lDMb1ALX4z-lvOkSj3XH0SqlXfTT0ZbajiKvCxUT8-F0hyvPIFE0W3_bmHSFIIDYdWzl3gddNRu6D0f1PtN2Sf9v5Q4cuJPyFlSSLOJXX-GV7q8AK3ur4u40bzyVwt_YzYj7D2KfThtUpV9yRcQ8j8SlU6qmFyT_qVZoBTS9ZhFJhPgl7jVZ3LEPNmeQefykQX2EHdPxHFIz-4tLq8lKdmSdz8Hu-OMr3h61rpBBu5akRTumruJCTcRtMI0lb_u5YcNAU0DBaLi-F9Ao3p9BxTQBCUX71hxZ4Zwz6YtTz0MhHstKuvleS-SUq9_l7xM31g5256ZbQQf1epTzUnanKL7W2hC8zjn4O0ubH94MGMsMhT4sdrQqgPNGeg7hOBX-rolAsm16E0po2P75cSy8yDiAU8LrLtUheV1ICvBrK9wzeYey31Dihmt9pohXJiLDCrNO9Ryv-n1q6nB-vB11xxoLeWDol-UcKzR3y7UV6Ild7OV3-MeGmnLvMGWt66bYIe26atij47lpu5V6x7OVBDEwF6IbSt9YscDpKwZW6zUTjpvRUeq2gDkAy0ME_1W0Im7yNSmwNUxIJAY4QP4P4aoeN1HJJkYUHUK-CaSMhnGUPKIaj33nExLeJANK87x2GHe2TKebK6dfRW1N5iNZ3Z-c4QNGMEIHilaWm-cgCOM')
  next()
})

Vue.config.productionTip = false

const store = new Vuex.Store(VuexStore)

// const router = new VueRouter({
//   routes
// })

sync(store, router)

// const unsync = sync(store, router)
// unsync()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
