import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// import { Toast } from 'mint-ui';

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);


import $ from 'jquery' ;

import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/css/icon-extra.css'

import './lib/mui/css/mui.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
