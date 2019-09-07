import Vue from 'vue'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: 'history',
  render: h => h(App)
})
