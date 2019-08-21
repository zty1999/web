import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';//全局配置统一的请求路径
Vue.http.options.emulateJSON = true;// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded


//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//直接导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//按需导入mint-ui
// import { Toast } from 'mint-ui';
//样式
import 'mint-ui/lib/style.css'

// //头部,轮播图
// import { Header,Swipe ,SwipeItem,Button} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

//懒加载lazy-load
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//一个Vue集成PhotoSwipe图像预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

Vue.config.devtools = true;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
