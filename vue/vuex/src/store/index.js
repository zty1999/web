import  Vue from 'vue'
import vuex  from 'vuex'

import mutations  from './mutations'
import actions  from './actions'
import getters  from './getters'
import MoudleA  from './modules/moduleA'

//1.安装插件
Vue.use(vuex)
//2.创建对象 

const state = {
    counter: 1000,
    students: [
        {id: 110, name: 'why', age: 18},
        {id: 111, name: 'kobe', age: 24},
        {id: 112, name: 'james', age: 30},
        {id: 113, name: 'curry', age: 10}
    ],
    Info: {
        name: 'mulean',
        age: 21,
        height: 1.70
    }
}



const store = new vuex.Store({
    state,
    actions,
    mutations,
    
    getters,
    modules: {
        a: MoudleA,
        
    }
})
//3.导出store
export default store
//4.在main.js中挂载调用store：
//import store  from './store'
//Vue.prototype.$store = store



// 对象的解构
const obj = {
    name: 'why',
    age: 18,
    height: 1.88,
    address: '洛杉矶'
  }
  
  const {name, height, age} = obj;