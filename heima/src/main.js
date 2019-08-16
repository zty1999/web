import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
//直接导入mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
//按需导入min-ui
// import { Toast } from 'mint-ui';
//样式
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//头部,轮播图
import { Header,Swipe ,SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);






import 'bootstrap/dist/css/bootstrap.css'




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
